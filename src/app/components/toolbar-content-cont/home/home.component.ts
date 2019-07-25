import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { Router } from '@angular/router';
import {title} from "../../../app-data";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username : string ;
  title = title ;
  constructor(private usr:UserService , private router:Router) {
    console.log(this.usr.username)
    this.username = this.usr.getUsername();
   }

  ngOnInit() {
    // console.log(this.usrService.loginState)
    // this.usrService.isLoggedIn();
    // console.log(this.usrService.loginState)
    // this.usrService.sesionInf().then(res=>{
    //   console.log("sess, ", res);
    // })
    // console.log(localStorage.getItem('user'));
    
  }

  onLogout(){
    this.usr.logout();
    // this.loggedOut.emit(true);
    this.router.navigate(['login']);
  }

}
