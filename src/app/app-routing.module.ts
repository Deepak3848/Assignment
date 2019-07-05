import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  { path : '' , component : HomeComponent},
  {path : 'employees' , component : EmployeeListComponent},
  {path : 'department' , component : DepartmentListComponent},
  {path : 'employee-details' , component : EmployeeDetailsComponent},
  {path : "**" , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, DepartmentListComponent, PageNotFoundComponent, EmployeeDetailsComponent]
