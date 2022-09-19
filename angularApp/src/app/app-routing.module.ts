import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    component: AddEmployeeComponent,
    path: 'add/employee'
  },
  {
    component: ListEmployeeComponent,
    path: 'list'
  },
  {
    component: UpdateEmployeeComponent,
    path: 'update/employee/:id'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
