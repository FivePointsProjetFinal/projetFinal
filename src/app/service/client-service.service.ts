import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  baseUrl="/api";

  constructor(private  httpClient: HttpClient) { }

  addClient(cl){
    this.httpClient.post<any>(this.baseUrl+'users/addUser',cl).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );
  }
  getClient(){
    const user= this.httpClient.get(this.baseUrl+'users/allUsers');
    return user;
  }
  deleteClient(id){
    this.httpClient.delete(this.baseUrl+'users/deletUser/'+id).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );
     location.reload();
  }
  getEtablibyid(id){
    const user= this.httpClient.get(this.baseUrl+'users/getClientById/'+id);
    return user;
  }
  updateClient(id,client){
    this.httpClient.put(this.baseUrl+'users/updateUser/'+id,client).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );;
    console.log("ok");
    
  }
}
