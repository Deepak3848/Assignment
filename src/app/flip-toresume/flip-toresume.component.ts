import { Component, OnInit, Output, EventEmitter,HostListener } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute,ParamMap, NavigationExtras } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-flip-toresume',
  templateUrl: './flip-toresume.component.html',
  styleUrls: ['./flip-toresume.component.scss']
})
export class FlipToresumeComponent implements OnInit {
  public employees = [];
  public selectedId;
  public employee = {};
  constructor(private _employeeService : EmployeeService, private router : Router, private route : ActivatedRoute, private dataService: DataService) { }
  
  @HostListener('click')
  click(title) {
    console.log('click');
    this.dataService.updateTitle(title);
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param) =>{
      this.employee = JSON.parse(JSON.stringify(param));
        // this._employeeService.getEmployees()
        // .subscribe(data => this.employees = data);
    });

    let eName = this.employee.name;
    this.click('Resume of' + " " + eName);
  }
  
 
}
