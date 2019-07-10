import { Component, OnInit, Input , HostListener} from '@angular/core';
import { ActivatedRoute, Router, ParamMap, NavigationExtras } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { DataService } from '../data.service';

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
  public name: any;
  constructor(private route : ActivatedRoute, private router : Router, private dataService : DataService) { }
   
  @HostListener('keydown')
  keydown(title) {
    console.log('click');
    this.dataService.updateTitle(title);
  }

  ngOnInit() {  
    console.log('Load Oninit');    
    this.route.queryParams.subscribe((param) =>{
      this.employee = JSON.parse(JSON.stringify(param));
        // this._employeeService.getEmployees()
        // .subscribe(data => this.employees = data);
    });    
    let eName = this.employee.name;
    this.keydown('Employee Details of' + " " + eName);
  }

  fliptoresume(employee){
    let navigationExtras: NavigationExtras = { 
      queryParams: employee,
      skipLocationChange: true
    };     
    this.router.navigate(['/fliptoresume'], navigationExtras);
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
    console.log(this.employeeId)
    let selectedId = this.employeeId ? this.employeeId :null;
    this.router.navigate(['employees' , {id: selectedId}])
  }

 

}
