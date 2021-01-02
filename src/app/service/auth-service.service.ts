import { HttpClient,HttpResponse , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseUrl="/api";
 


  constructor(private  httpClient: HttpClient) { }

  isLoginSubject = new BehaviorSubject<boolean>(this.isAuthentificated())

  addUser(user){
    const  token = localStorage.getItem('token');
    const  headers  = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    this.httpClient.post<any>(this.baseUrl+'users/addUser',user,{ headers: headers }).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  getUser(){
    const user= this.httpClient.get(this.baseUrl+'users/allUsers');
    return user;
  }
  
  login(log){
  this.httpClient.post(this.baseUrl+'/logins/login',log) .subscribe((response:any) => {
    if (response.token) {
      localStorage.setItem('token',response.token );
      this.isLoginSubject.next(true);
      console.log(response.message);
    }
    (error) => console.log(error.message)
      
   })

      
  }
  
  public isAuthentificated(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }
}
