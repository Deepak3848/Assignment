import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { EmployeeService } from './employee.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from  '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DataService } from './data.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
//import { ProjectsComponent } from './projects/projects.component';
//import { InfoComponent } from './info/info.component';
//import { FlipToresumeComponent } from './flip-toresume/flip-toresume.component';
//import { DepartmentListComponent } from './department-list/department-list.component';
 

@NgModule({
  declarations: [
    AppComponent,  
    routingComponents,   
    HomeComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    LandingPageComponent,
    TabsComponent,
    TabComponent
    //ProjectsComponent,
    //InfoComponent,
    //FlipToresumeComponent,
    //DepartmentListComponent
     //EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [EmployeeService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
