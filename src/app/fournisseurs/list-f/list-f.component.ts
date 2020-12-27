import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from 'app/client/add-client/add-client.component';
import { ClientServiceService } from 'app/service/client-service.service';

@Component({
  selector: 'app-list-f',
  templateUrl: './list-f.component.html',
  styleUrls: ['./list-f.component.css']
})
export class ListFComponent implements OnInit {

  clients;

  constructor(public dialog: MatDialog ,private ClientServices: ClientServiceService) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(AddClientComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
  ngOnInit(): void {
    // this.clients=this.ClientServices.listClient();
  }
  deletClient(id){
    this.ClientServices.deleteClient(id) ;
       location.reload();
    }

}
