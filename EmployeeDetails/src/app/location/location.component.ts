import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }
  isValidFormSubmitted = false;  
  location = new Location();  

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


export class Location {  
  locationId : string;  
  userId : any;
  userLocationId: any;
 }  
