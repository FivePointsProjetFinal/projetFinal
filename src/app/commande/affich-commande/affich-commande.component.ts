import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientServiceService } from 'app/service/client-service.service';
import { CommandeSeviceService } from 'app/service/commande-sevice.service';

@Component({
  selector: 'app-affich-commande',
  templateUrl: './affich-commande.component.html',
  styleUrls: ['./affich-commande.component.css']
})
export class AffichCommandeComponent implements OnInit {
client;
date;
mont_tot;
refC;
produits: any = [];
  constructor(
    public dialogRef :MatDialogRef<AffichCommandeComponent >,
    private CommandeServices: CommandeSeviceService,
    private ClientServices: ClientServiceService,
   @Inject(MAT_DIALOG_DATA)public data: any ){ };

  ngOnInit(): void {
    this.CommandeServices.getCommandebyid(this.data.id).subscribe((response:any) => {
      response.produitRows.forEach(element => {
        this.produits.push(element)
      });
      console.log(this.produits);
this.date=response.commande.date_commande;
this.mont_tot=response.commande.montant_total;
this.refC=response.commande.refCommande;



      this.ClientServices.getClientbyid(response.commande.idClient).subscribe((resp:any) => {
      this.client=resp
      })
  })
  }
  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();
    document.body.innerHTML = originalContents;
}
close() {
  this.dialogRef.close();
  
}   

}
