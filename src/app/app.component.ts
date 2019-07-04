import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string = 'Home';
  public homePage:boolean = true;

  hideEmplyeeButton(){
    this.homePage = false;  
    this.title = "Employee List";
  }
  
}

