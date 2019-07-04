import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  public employeeId;
  public prevId;
  public nextId;
  constructor(private route : ActivatedRoute, private router : Router) { }
  
  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params :ParamMap) =>{
      let id = parseInt(params.get('id'));
        this.employeeId = id;
    })
    
  
  }

  goPrev(){
    this.prevId = this.employeeId - 1;
    this.router.navigate(['employee-details' , this.prevId]);
  }

  goNext(){
    this.nextId = this.employeeId + 1;
    this.router.navigate(['employee-details' , this.nextId]);
  }

  goBack(){
    let selectedId = this.employeeId ? this.employeeId :null;
    this.router.navigate(['employees' , {id: selectedId}])
  }

}
