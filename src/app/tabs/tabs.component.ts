/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
    Component,
    ContentChildren,
    QueryList,
    AfterContentInit,
    ViewChild,
    ComponentFactoryResolver,
    ViewContainerRef,
    OnInit,
    HostListener
  } from '@angular/core';

import { TabComponent } from './tab.component';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
  //import { DynamicTabsDirective } from './dynamic-tabs.directive';
  
  @Component({
    selector: 'my-tabs',
    template: `
      <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
          <a>{{tab.title}}</a>
        </li>
      </ul>
      <ng-content></ng-content>
    `,
    styles: [
      `
      .tab-close {
        color: gray;
        text-align: right;
        cursor: pointer;
      }

      li a {
        cursor : pointer;
      }
      `
    ]
  })
  export class TabsComponent implements AfterContentInit, OnInit {
    public employees = [];
    public selectedId;
    public employee = {};
    constructor(private _employeeService : EmployeeService, private router : Router, private route : ActivatedRoute, private dataService: DataService) { }
    
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    
    // contentChildren are set
    ngAfterContentInit() {
      // get all active tabs
      let activeTabs = this.tabs.filter((tab)=>tab.active);      
      // if there is no active tab set, activate the first
      if(activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    }  

    ngOnInit() {
    }
    
    selectTab(tab: Tab){     
      // deactivate all tabs
      this.tabs.toArray().forEach(tab => tab.active = false);      
      // activate the tab the user has clicked on.
      tab.active = true;  
    
    }
  }
  