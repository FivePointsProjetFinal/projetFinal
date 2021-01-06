import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FournisseurServiceService {
  baseUrl="/api";

  constructor(private  httpClient: HttpClient) { }

  addFournisseur(Fournisseur){
    this.httpClient.post<any>(this.baseUrl+'fournisseurs/addFournisseur',Fournisseur).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  getFournisseur(){
    const user= this.httpClient.get(this.baseUrl+'fournisseurs/allFournisseur');
    return user;
  }
  deleteFournisseur(id){
    this.httpClient.delete(this.baseUrl+'fournisseurs/deletFournisseur/'+id).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  getFournisseurbyid(id){
    const user= this.httpClient.get(this.baseUrl+'fournisseurs/getFournisseurById/'+id);
    return user;
  }
  updateFournisseur(id,Fournisseur){
    this.httpClient.put(this.baseUrl+'fournisseurs/updateFournisseur/'+id,Fournisseur).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  favoris(id){
    this.httpClient.put(this.baseUrl+'fournisseurs/updateFavF/'+id,"").subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  getFavFournisseur(){
    const fournisseur= this.httpClient.get(this.baseUrl+'fournisseurs/getFavoritF');
    return fournisseur;
  }
}
