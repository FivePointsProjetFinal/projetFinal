import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommandeSeviceService } from 'app/service/commande-sevice.service';
import { ProduitServiceService } from 'app/service/produit-service.service';
import { AddCommandeComponent } from '../add-commande/add-commande.component';
import { AffichCommandeComponent } from '../affich-commande/affich-commande.component';
import { UpdateCommandeComponent } from '../update-commande/update-commande.component';


export interface commandes{
  refCommande : String,
  montant_total :String,
  date_commande:Date,
}

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})

export class ListCommandeComponent implements OnInit {

  
  public displayedColumns = ['ref-Commande',' montant_total ', 'date_commande', 'details', 'update', 'delete','Validee'];
  public dataSource = new MatTableDataSource<commandes>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private commandeServices: CommandeSeviceService,private router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.commandeServices.getCommande().subscribe((response:any) => {
        this.dataSource.data = response.commande as commandes[];
   })
  }

  // openDialog2() {
  //   const dialogRef = this.dialog.open();

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  openModal(id): void {
    const dialogRef = this.dialog.open(AffichCommandeComponent, {
      data :{'id':id}
 });
    dialogRef.afterClosed().subscribe((result:string) => {
        this.router.navigate(['AffichClientComponent',id]);

        console.log('The dialog was closed');
        console.log(result);
    });
}

openModalUpdate(id): void {
  const dialogRef = this.dialog.open(UpdateCommandeComponent, {
    data :{'id':id}
});
  dialogRef.afterClosed().subscribe((result:string) => {
      this.router.navigate(['UpdateClientComponent',id]);

      console.log('The dialog was closed');
      console.log(result);
  });
}



    
 
  valide(id){
    this.commandeServices.validation(id);
  
  }

 redirectToDelete  (id) {
  this.commandeServices.deleteCommande(id).subscribe(
    (msg) => {
      console.log(msg) },
    (error) =>{console.log(error)} ,
    ()=>{this.ngOnInit()}
  );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
}
