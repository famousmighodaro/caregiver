import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeesPageRoutingModule } from './employees-routing.module';


import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeesPage } from './employees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeesPageRoutingModule,
    FormsModule
  ],
  declarations: [EmployeesPage, CreateEmployeeComponent]
})
export class EmployeesPageModule { }
