import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import {title} from "../../../app-data";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title = title;
  constructor( private router: Router, private dialog:MatDialog,) {
    // redirect to home if already logged in
    if (localStorage.getItem("user")) {
      this.router.navigate(['/']);
  }
   }

  ngOnInit() {
  }

  login(){
    this.dialog.open(LoginComponent, {
      // height: '400px',
      width: '600px',
    }).beforeClosed().subscribe(result =>{
        // result ? (this.isAuthenticated = true ) : '';
        if (result){ 
          this.router.navigate(['home']);
        }
        
    });
  }
}
