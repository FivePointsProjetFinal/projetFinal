import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  submitted:Boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
}
submitForm() {
this.submitted=true;
if (this.loginForm.invalid) {
  return;
}
console.log(this.loginForm.value);

// if(this.authService.login(this.loginForm.value)){
//   this.router.navigateByUrl('/admin')
// }

}
}
