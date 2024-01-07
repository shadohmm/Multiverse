import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logOutOrNot:boolean = false;
  currentRoute:string = '';
  @Output() event = new EventEmitter();
  IconClicled(){
    this.logOutOrNot =!this.logOutOrNot;
    this.event.emit(this.logOutOrNot)
  }
  constructor(private route:ActivatedRoute){}
  onRouteActivate(event:any){
    this.currentRoute = this.route.firstChild?.snapshot.routeConfig?.path || '';
  }
}
