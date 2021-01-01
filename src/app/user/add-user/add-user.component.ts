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
    this.userForm = new FormGroup({ 
      firstName  :new FormControl('', [Validators.required]),
      lastName :new FormControl('', [Validators.required]),
      telp :new FormControl('', [Validators.required]),
      adresse :new FormControl('', [Validators.required]),
      email  :new FormControl('', [Validators.required]),
      password  :new FormControl('', [Validators.required]),
      roleUser :new FormControl('', [Validators.required]),
    });
  }
  submitUser() {
    this.submitted=true;
    if (this.userForm.invalid) {
      return ;  
    }
  
    // this.adminService.addUser(this.userForm.value);
    //  this.router.navigateByUrl('/admin')
  }
}
