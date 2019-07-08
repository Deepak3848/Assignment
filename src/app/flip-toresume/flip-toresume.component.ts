import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  constructor(private _employeeService : EmployeeService, private router : Router, private route : ActivatedRoute, private data: DataService) { }

  ngOnInit() {
  }

}
