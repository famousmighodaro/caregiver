import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';



const routes: Routes = [
  {
    path: '',
    component: EmployeesPage
  },
  {
    path: ':employeeId',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesPageRoutingModule { }
