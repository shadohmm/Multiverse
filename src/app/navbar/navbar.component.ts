import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logOutOrNot:boolean = false;
  currentRoute:string = '';
  isAuthenticated:boolean = false;
  @Output() event = new EventEmitter();
  IconClicled(){
    this.logOutOrNot =!this.logOutOrNot;
    this.event.emit(this.logOutOrNot)
  }
  constructor(private authService:AuthService, private route:ActivatedRoute){ }
  onRouteActivate(event:any){
    this.currentRoute = this.route.firstChild?.snapshot.routeConfig?.path || '';
  }
  setIsActivated(){
  this.authService.setIsActivated()
  }
 
}
