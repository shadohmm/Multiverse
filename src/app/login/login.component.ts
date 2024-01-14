import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  isCondition1Met:boolean =false;
  isCondition2Met:boolean = false;
  loginStatus: boolean =false;
  signInStatu : string = "Please Enter the Details";
  signUpStatus :string = 'Please SignUp';
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
  constructor(private router: Router, private auth:AuthService) { }
  onSignUp(){
    let userName = this.signUpObj.email
    let password = this.signUpObj.password
    let singUpStatus = this.auth.signUp(userName, password)
    this.signUpStatus = singUpStatus;
    if(this.signInStatu === "User Already exist"){
      this.isCondition1Met = true;
    }
   // this.loginStatus = this.signUpObj.userName.trim() !== '' && this.signUpObj.password.trim() !== '' && this.signUpObj.email.trim() !== ''
  //  this.loginStatus = true;
  //  this.router.navigate(['/app']);
 
  }
  onLogin(){
    let userName = this.signObj.useName;
    let password = this.signObj.password;
    let signInSt = this.auth.signIn(userName,password);
    
    if(signInSt === true){
      console.log("loggend in navigatinf to app");
      this.signInStatu = "Login Success";
    this.router.navigate(['/home']);
    }else{
      console.log("login failes");
      this.isCondition2Met = true
      this.signInStatu = signInSt;
    }

    // this.loginStatus = this.signObj.userName.trim() !== '' && this.signObj.password.trim() !== ''
    // this.loginStatus = true;
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
