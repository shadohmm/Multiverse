import { Component , OnInit, ViewChild} from '@angular/core';
import { UpdatingEmployeeComponent} from '../updating-employee/updating-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/interfaces/employee.model';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  EditingEmployee: Employee;
  constructor(private dialog: MatDialog, public empService : EmployeeService){}

   // the columns that will be displayed in the employee details table
   displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'salary',
    'action',
  ];

  openPopup(){
    const dialogRef = this.dialog.open(UpdatingEmployeeComponent, {
      width: 'auto',
      height: 'auto',
      
      
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      // Do something with the result if needed
    });
  }
  deleteEmp(emplID:number){
      this.empService.deleteEmployee(emplID);
  }
  editEmpDetails(emplID:number){
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: 'auto',
      height: 'auto',
      
    // data: {
    //   showPopup: true,
    //   empEditId : emplID
    // }
      
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      // Do something with the result if needed
    });
    
    this.EditingEmployee =this.empService.getEmployeeByID(emplID);
    console.log('222222222222222222222',this.EditingEmployee);
    
    this.empService.setUpdatedEmployee(this.EditingEmployee);
    // this.empService.setShow(true)
  

  }
}
