import { Component, OnInit, Output, EventEmitter,HostListener } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute,ParamMap, NavigationExtras } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-flip-toresume',
  templateUrl: './flip-toresume.component.html',
  styleUrls: ['./flip-toresume.component.scss']
})
export class FlipToresumeComponent implements OnInit {
  public employees = [];
  public selectedId;
  public employee = {};
  public employeeId;  
  constructor(private _employeeService : EmployeeService, private router : Router, private route : ActivatedRoute, private dataService: DataService, private _location: Location) { }
  
  @HostListener('keydown')
  keydown(title) {
    this.dataService.updateTitle(title);
  }

  ngOnInit() {   
    this.route.queryParams.subscribe((param) =>{
      this.employee = JSON.parse(JSON.stringify(param));
        // this._employeeService.getEmployees()
        // .subscribe(data => this.employees = data);
    });
  }

  goBack(){
    let navigationExtras: NavigationExtras = { 
      queryParams: this.employee,
      skipLocationChange: true
    };     
    this.router.navigate(['/employee-details'], navigationExtras); 
  }
}
