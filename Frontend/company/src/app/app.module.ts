import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './general-instance/company/department/department.component';
import { BenefitComponent } from './human-resources/benefit/benefit.component';
import { EmployeeComponent } from './human-resources/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    BenefitComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
