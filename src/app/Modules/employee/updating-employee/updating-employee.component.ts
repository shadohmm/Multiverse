import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/interfaces/employee.model';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';

@Component({
  selector: 'app-updating-employee',
  templateUrl: './updating-employee.component.html',
  styleUrls: ['./updating-employee.component.css']
})
export class UpdatingEmployeeComponent implements OnInit {
  @Input() employee : Employee;
  show = false;
  private subscription: Subscription;
  EditingEmployee: Employee;
  
  editingEmpId:number =0;
  ngOnInit(): void {
    
    // Initialize the employee object if not provided
    if (!this.employee) {
      this.employee = {
        skils: '',
        id: Date.now(),
        firstName: '',
        lastName: '',
        email: '',
        dob: null,
        education: '',
        experience: null,
        salary: null,
      };
    }
  }


  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private empService : EmployeeService, 
    private dialogRef:MatDialogRef<UpdatingEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    // this.subscription = this.empService.show$.subscribe((value) +>{
    //   this.show = value;
    // });
    // // const showPopup = data.showPopup;
    // if(showPopup){
    //   this.updaterequest = this.data.showPopup;
    //   this.editingEmpId = this.data.empEditId;
    //   this.EmpDetailsEdit();
    //}
  }
  
  

  onSave(){
    this.dialogRef.close();
    console.log(this.employee);
    this.empService.addEmployee(this.employee)
  }
  onCancel(){
    this.dialogRef.close();
    console.log(this.employee);
  }
  EmpDetailsEdit(){
    
    this.EditingEmployee = this.empService.getEmployeeByID(this.editingEmpId)
  }

  public showEmpEdit(){
    
   
    this.show = true
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
