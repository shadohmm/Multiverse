import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/interfaces/employee.model';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  @Input() employee : Employee;
  EditingEmployee: Employee;
  updatedEmployee : Employee;
  

  constructor(  private empService:EmployeeService,    private dialogRef:MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){}

  ngOnInit(): void {
   
      // Initialize the employee object if not provided
     
  
    this.updatedEmployee = this.empService.getUpdatedEmployee();
    if (!this.employee) {
      this.employee = {
        skils: this.updatedEmployee.skils,
        id: this.updatedEmployee.id,
        firstName: this.updatedEmployee.firstName,
        lastName: this.updatedEmployee.lastName,
        email:this.updatedEmployee.email,
        dob: this.updatedEmployee.dob,
        education: this.updatedEmployee.education,
        experience: this.updatedEmployee.experience,
        salary: this.updatedEmployee.salary,
      };
    }
  }
  

  onSave(){
    this.empService.updateEmployee(this.employee)
    this.dialogRef.close();
    console.log(this.employee);
    //this.empService.addEmployee(this.employee)
  }
  onCancel(){
    this.dialogRef.close();
    console.log(this.employee);
  }

  

}
