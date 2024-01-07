import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { UpdatingEmployeeComponent } from './updating-employee/updating-employee.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UpdateComponent } from './update/update.component'


@NgModule({
  declarations: [
    EmployeeComponent,
    UpdatingEmployeeComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule { }
