import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  getTask(): Task[]{
    return this.tasks
  }

  addTask(task:Task):void{
    this.tasks.push(task)
  }

  updateTask(updateTask:Task):void{
    const index = this.tasks.findIndex((t) => t.id === updateTask.id);
    if(index !== -1){
      this.tasks[index] = updateTask;
    }
  }

  deleteTask(taskId: number): void{
    this.tasks = this.tasks.filter((task) =>task.id !== taskId);
  }
  getTaskByID(taskId:number){
    const index = this.tasks.findIndex((t) => t.id === taskId);
    return this.tasks[index]

  }
}
