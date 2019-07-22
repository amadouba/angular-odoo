import { Component, Input, OnChanges, OnInit, Output, SimpleChange, EventEmitter } from '@angular/core';
import {LeftnavComponent} from '../leftnav/leftnav.component';
import {MaincontentComponent} from '../maincontent/maincontent.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // @Input() isAuthenticated : boolean ;
  @Output() loggedOut = new EventEmitter<boolean>() ;
  @Output() isAuthenticatedChange = new EventEmitter<string>();



  constructor(private userService: UserService) { 
    // this.isAuthenticated = userService.loginState;
  }

  ngOnInit() {
    
  }

  // ngOnChanges(changes:SimpleChange){
  //   for (let propName in changes ){
  //     let changedProp = changes[propName];
  //     if ('isAuthenticated' == propName){
  //       this.isAuthenticatedChange.emit(changedProp.currentValue);
  //     }
  //   }

  // }

  onLogout(){
    this.userService.logout();
    this.loggedOut.emit(true);
  }
  
}
