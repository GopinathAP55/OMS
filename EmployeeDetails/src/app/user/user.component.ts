import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isValidFormSubmitted = false;  
  user = new User();  

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {  
    this.isValidFormSubmitted = false;  
    if (form.invalid) {  
       return;  
    }  
    this.isValidFormSubmitted = true;  
    form.resetForm();  
 }
 

}

export class User {  
  mobileNumber ?: string;  
  email : any;
  userName:any;
  fullName:any;
 }  