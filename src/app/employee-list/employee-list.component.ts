import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute,ParamMap, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public selectedId;

  @Output() public emolyeeHeading = new EventEmitter;
  constructor( private _employeeService : EmployeeService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
     this._employeeService.getEmployees()
         .subscribe(data => this.employees = data);
         this.route.paramMap.subscribe((params :ParamMap) =>{
          let id = parseInt(params.get('id'));        
            this.selectedId = id;            
        }) 
  }

  onSelect(employee){
    let navigationExtras: NavigationExtras = { 
      queryParams: employee,
      skipLocationChange: true
    };     
    this.router.navigate(['/employee-details'], navigationExtras);
  }


  //for selected id
  isSelected(employee){
    console.log(employee);
   return employee.id === this.selectedId;
  }

}
