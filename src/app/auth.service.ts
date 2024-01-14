import { Injectable } from '@angular/core';
import { Auth } from './interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth : Auth[] = [];
  private isAuthenticated = false;

  constructor() { }

  getIsActivated(){
    return this.isAuthenticated;
  }

  setIsActivated(){
    this.isAuthenticated = false;
  }
  signIn(username: string, password: string):any{
    // Implement sign-in logic here
    let isExisting = this.auth.find((user) => user.userName === username && user.password === password);
    if(isExisting){
      if(isExisting.password === password){
        this.isAuthenticated = true;
        return true;
      }else{
        return "Password does not match";

      }
      
    }else{
      return "User Does not exist"
    }

  

  }

  signUp(username: string, password: string):string{
    let authitem:Auth ={
      id :new Date,
      userName : '',
      password: ''
    };
    
    let isExisting = this.auth.find((user) => user.userName === username && user.password === password);
    if (isExisting) {
      //console.log('User exists:', isExisting);
      return "User Already exist"
    } 
    else {
      authitem.userName = username;
      authitem.password = password;
      this.auth.push(authitem)
      console.log('User does not exist');
      return "User Added Succesfully"
    }
  }
}
