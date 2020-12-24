import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  submitted=false;
  userForm;
  constructor() { }

  ngOnInit(): void {
    this.userForm= new FormGroup({
      ID: new FormControl('',Validators.required),
      first_name:new FormControl('',Validators.required),
      last_name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  submitForm() {
    this.submitted=true;
    if (this.userForm.invalid) {
      return ;  
    }
  
    // this.adminService.addUser(this.userForm.value);
    //  this.router.navigateByUrl('/admin')
  }
}
