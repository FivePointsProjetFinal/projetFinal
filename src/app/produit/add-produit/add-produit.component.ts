import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitServiceService } from 'app/service/produit-service.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  
  submited = true;
  clientForm: FormGroup;
  
  constructor(private ProduitServices: ProduitServiceService , private route: Router) { }

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      nameClient : new FormControl('', [Validators.required]),
      telpClient: new FormControl('', [Validators.required]),
      faxClient : new FormControl('', [Validators.required]),
      adresseClient : new FormControl('', [Validators.required]),
      emailClient : new FormControl('', [Validators.required,Validators.email]),
      modepaimentClient: new FormControl('', [Validators.required]), 
      villeClient : new FormControl('', [Validators.required]),
      typeClient : new FormControl('', [Validators.required]),
      favorisClient: new FormControl(),
      refClient: new FormControl('', [Validators.required]),
      


      
    });
  }

  submitClient() {
    this.submited = true;
    if (this.clientForm.invalid) {
      return;
    }
   
    
     this.ProduitServices.addProduit(this.clientForm.value);
    
  }

}
