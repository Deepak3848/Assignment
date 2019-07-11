import { Component, OnInit, HostBinding } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
  @HostBinding('class.is-open')
  isOpen = 'Home';  

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.change.subscribe(title => {
      console.log(title);
      this.isOpen = title;
    });
  }

  title :string = 'Home';
  public homePage:boolean = true;
}
