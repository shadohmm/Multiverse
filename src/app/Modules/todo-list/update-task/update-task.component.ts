import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoInputMessService } from 'src/app/todo-input-mess.service';
import { Task } from 'src/app/interfaces/task.model';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  inputText = '';
  descriptio = '';
  newTask : Task| undefined;
  currentTaskID:number |undefined;
  //@Input() parentdescriptionRecieved : string = '';
  //@Input() parentdescriptionRecieved : string = '';
 
  //@Input() parentdescriptionRecieved : string = '';
  
  //@Input() parentdescriptionRecieved : string = '';
  constructor(public tasks:TaskService,private dialogRef: MatDialogRef<UpdateTaskComponent>, private mesService:TodoInputMessService){}
  
  
  updateTaskDesc(taskId:number){

    // const task = this.tasks.getTask();
    // const index = task.findIndex(task => task.id === taskId);
    // task[index].description = this.descriptio;
    // this.descriptio = '';
  }

  ngOnInit(): void {
    this.inputText = this.mesService.getToDoTaskDes()
  }

  onSave(): void {
    // You can do something with the inputText here
    //this.mesService.setToDOTaskDes(this.inputText,)
    this.currentTaskID= this.mesService.getTaskID()
    this.newTask = this.tasks.getTaskByID(this.currentTaskID)
    this.newTask.description = this.inputText;
    this.tasks.updateTask(this.newTask)
    // For example, send it to a service or emit an event
    this.dialogRef.close(this.inputText);
  }

  onCancel(): void {
    this.dialogRef.close();
  }


}
