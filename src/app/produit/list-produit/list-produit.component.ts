import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientServiceService } from 'app/service/client-service.service';
import { ProduitServiceService } from 'app/service/produit-service.service';
import { AddProduitComponent } from '../add-produit/add-produit.component';

export interface Owner{ 
nameProduit : String,
qteProduit : String,
prixDachat : String,
prixVente : String,

}

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {


  public displayedColumns = ['name_produit', 'quantite','prix_achat', 'prix_vente', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Owner>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public dialog: MatDialog ,private produitServices: ProduitServiceService) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(AddProduitComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
  ngOnInit(): void {
    this.getAllOwners();
  
  }

   getAllOwners () {
    this.produitServices.getProduit().subscribe((response:any) => {
       this.dataSource.data = response.produit as Owner[];
    })
    
  }
  redirectToDetails (id) {
    
  }
  redirectToUpdate (id) {
    
  }
 redirectToDelete  (id) {
  this.produitServices.deleteProduit(id);
  console.log("ok1");
  
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}