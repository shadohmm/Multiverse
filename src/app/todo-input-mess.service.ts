import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoInputMessService {
  toDoTask:string = ''
  taskID:number =0;
  constructor() { }

  getToDoTaskDes(){
    return this.toDoTask
  }
  getTaskID(){
    return this.taskID;
  }

  setToDOTaskDes(mess:string, taskId:number){
    this.toDoTask = mess;
    this.taskID = taskId;
  }


}
