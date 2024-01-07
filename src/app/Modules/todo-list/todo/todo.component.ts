import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { TodoInputMessService } from 'src/app/todo-input-mess.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  descTOMessService: string ='';
  constructor(public taskService: TaskService,private dialog: MatDialog, private mesService: TodoInputMessService){}
  
  updateTaskStatus(taskId:number): void{
    const taskToUpdate = this.taskService.getTask().find((task)=>task.id ===taskId);
    if(taskToUpdate){
      taskToUpdate.completed = !taskToUpdate.completed;
      this.taskService.updateTask(taskToUpdate);
    }
  }
  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }
  updateTask(taskId:number){
    //this.taskService.updateTask
    
  }
  openPopup(TaskID:number): void {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      width: '300px',
      
    });
    //************************************* */
    this.descTOMessService = this.taskService.getTaskByID(TaskID).description
    console.log(this.descTOMessService);
    
    this.mesService.setToDOTaskDes(this.descTOMessService,TaskID)
    // 888888888888888888888888888888888888888888888888888888

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      // Do something with the result if needed
    });
  }

  

}
