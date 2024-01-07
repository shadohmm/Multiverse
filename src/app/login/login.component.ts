import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  // username: string = '';
  // password: string = '';
  loginStatus: boolean =false;
  signedUpUsers: any[] = [];
  signUpObj:any = {
    useName:'',
    email:'',
    password: ''
  }
  signObj:any = {
    useName: '',
    password: ''
  }
  @Output() event  = new EventEmitter();
  // ngOnInit():void{
  //   const localData = localStorage.getItem('signedUpUsers');
  //   if(localData != null){
  //     this.signedUpUsers = JSON.parse(localData);
  //   }
  // }
  constructor(private router: Router) { }
  onSignUp(){
   // this.loginStatus = this.signUpObj.userName.trim() !== '' && this.signUpObj.password.trim() !== '' && this.signUpObj.email.trim() !== ''
   this.loginStatus = true;
   this.router.navigate(['/app']);
    // this.signedUpUsers.push(this.signUpObj)
    // localStorage.setItem('signedUpUsers', JSON.stringify(this.signedUpUsers));
    // this.signUpObj = {
    //   useName:'',
    //   email:'',
    //   password: ''
    // }
  }
  onLogin(){
    // this.loginStatus = this.signObj.userName.trim() !== '' && this.signObj.password.trim() !== ''
    this.loginStatus = true;
    this.router.navigate(['/app']);
    // const isUserExist = this.signedUpUsers.find(m => m.username == this.signObj.useName  && m.password == this.signObj.password);
    //  if(isUserExist != undefined){
    //   alert("user loged in");
    //  }else{
    //   alert("bad");
    //  }

  }

  login() {
    // Your authentication logic here
    // For simplicity, let's assume successful login if both username and password are non-empty
    //this.loginStatus = this.username.trim() !== '' && this.password.trim() !== '';
  }
 

  sendLoginStatus(){
    this.event.emit(this.loginStatus)
  }
  

}
