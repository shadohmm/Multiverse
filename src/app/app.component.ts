import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multiverse';
  isLoginVisible = true;
  //currentRoute:string = '';
  loginStatusrecieveFromChild(data:boolean){
    this.isLoginVisible = data;
  }

  loginStatusFromNav(data:boolean){
    this.isLoginVisible = data;
  }
  //constructor(private route:ActivatedRoute){}

 

}
