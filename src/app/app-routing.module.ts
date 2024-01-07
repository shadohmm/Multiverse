import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './Modules/calculator/calculator/calculator.component';
import { EmployeeComponent } from './Modules/employee/employee/employee.component';
import { TodoComponent } from './Modules/todo-list/todo/todo.component';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  //here we write the rout configuration 
  {path:'login',component:LoginComponent},
  {path:'home',component:CardsComponent},
  {path:'employees',component:EmployeeComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'todolit',component:TodoComponent},
  {path: '', redirectTo:'app',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
