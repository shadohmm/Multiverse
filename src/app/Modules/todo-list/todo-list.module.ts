import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TodoInputMessService } from 'src/app/todo-input-mess.service';


@NgModule({
  declarations: [
    TodoComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    
  ],
  providers: [
    TodoInputMessService
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  
  ],
  exports:[
    TodoComponent
  ]
})
export class TodoListModule { }
