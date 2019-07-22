import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usrService:UserService , private router:Router) { }

  ngOnInit() {
    // console.log(this.usrService.loginState)
    // this.usrService.isLoggedIn();
    // console.log(this.usrService.loginState)
    // this.usrService.sesionInf().then(res=>{
    //   console.log("sess, ", res);
    // })
    console.log(localStorage.getItem('user'));
    if (!localStorage.getItem("user")){
      this.router.navigate(['/']);
    }
  }


}
