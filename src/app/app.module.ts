import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {CalculatorModule} from './Modules/calculator/calculator.module'
import { EmployeeModule } from './Modules/employee/employee.module';
import { TodoListModule } from './Modules/todo-list/todo-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalculatorModule,
    EmployeeModule,
    TodoListModule,
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
