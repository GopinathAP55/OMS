import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeDetails';


  private _opened: boolean = false;
  private isUserEntryLoaded: any;


 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  loadUserEntry(value : string){
      this.isUserEntryLoaded = value;
  }

  

}
