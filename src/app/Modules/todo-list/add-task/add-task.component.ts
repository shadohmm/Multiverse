import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/app/interfaces/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTaskDescription = '';
  constructor(private taskService:TaskService){}

  addTask(): void{
      if(this.newTaskDescription.trim()){
        const newTask:Task = {
          id:Date.now(),
          description:this.newTaskDescription.trim(),
          completed:false
        };

        this.taskService.addTask(newTask);
        this.newTaskDescription = '';
      }
  }

}
