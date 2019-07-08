import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  title :string = 'Home';
  public homePage:boolean = true;

  hideEmplyeeButton(){
   this.homePage = false;  
   this.title = "Employee List";
  }

  ngOnInit() {
  }

}
