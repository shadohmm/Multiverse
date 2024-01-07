import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }
  private employees : Employee[] = [];

  private editingEMployee :Employee;
  private showEditForm = new BehaviorSubject<boolean>(false);
  show$ = this.showEditForm.asObservable();
  getEmployeeList() : Employee[]{
    return this.employees
  }

  addEmployee(emp: Employee):void{
    this.employees.push(emp);
  }

  updateEmployee(updatedEmployee : Employee):void{
    const index = this.employees.findIndex((emp) => emp.id === updatedEmployee.id);
    if(index !== -1){
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(empId : number) :void{
    this.employees = this.employees.filter((emp) =>emp.id !== empId)
  }

  getEmployeeByID(empId : number){
    const index = this.employees.findIndex((emp) => emp.id === empId);
    return this.employees[index]
  }

  setShow(value : boolean){
    this.showEditForm.next(value);
  }

  setUpdatedEmployee(emp:Employee):void{
      
    this.editingEMployee = emp;
  }
  getUpdatedEmployee(){
    return this.editingEMployee;
  }

  
}
