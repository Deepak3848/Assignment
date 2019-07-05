import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  public employeeId;
  public prevId;
  public nextId;
  public selectedId;
  public employee = {};
  constructor(private route : ActivatedRoute, private router : Router) { }
  
  ngOnInit() {   
    this.route.queryParams.subscribe((param) =>{
      this.employee = param;
        // this._employeeService.getEmployees()
        // .subscribe(data => this.employees = data);
    });
  }

  /*goPrev(){
    this.prevId = this.employeeId - 1;
    this.router.navigate(['employee-details' , this.prevId]);
  }

  goNext(){
    this.nextId = this.employeeId + 1;
    this.router.navigate(['employee-details' , this.nextId]);
  }*/
  
  goBack(){
    let selectedId = this.employeeId ? this.employeeId :null;
    this.router.navigate(['employees' , {id: selectedId}])
  }

 

}
