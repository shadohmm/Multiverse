import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './Modules/calculator/calculator/calculator.component';
import { EmployeeComponent } from './Modules/employee/employee/employee.component';
import { TodoComponent } from './Modules/todo-list/todo/todo.component';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  //here we write the rout configuration 
  {path:'login',component:LoginComponent},
  {path:'home',component:CardsComponent, canActivate: [AuthGuard]},
  {path:'employees',component:EmployeeComponent, canActivate: [AuthGuard]},
  {path:'calculator',component:CalculatorComponent, canActivate: [AuthGuard]},
  {path:'todolit',component:TodoComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
  // { path: '', component: LoginComponent }
  //{path: '', redirectTo:'app',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
