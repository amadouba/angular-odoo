import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher, MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';
import {OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc'
import { ADDRESSES } from '../core/serveradresses';




/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted) );
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //isAuthenticated:boolean = true;
  hide = true;
  showLoginError  ;
  matcher = new MyErrorStateMatcher();
  server :string;
  db: string;
  email:string;
  pwd:string;
  addr = ADDRESSES;

  loginForm = this.fb.group({
    odoo_server:['', Validators.required],
    http_auth:[''],
    db:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    pwd:['', Validators.required],

  });

  constructor(private userService: UserService, private fb:FormBuilder, public dialogRef: MatDialogRef<LoginComponent>) {  
    
  }

  ngOnInit() {
    
    
  }

  getErrorMessage(ctrl:string) {
    return this.loginForm.get(ctrl).hasError('required') ? 'You must enter a value' :
    this.loginForm.get(ctrl).hasError('email') ? 'Not a valid email' :
            '';

  }
  onSubmit(){
    //  this.server =this.loginForm.get('odoo_server').value;
    //  this.db = this.loginForm.get('db').value;
    //  this.email = this.loginForm.get('email').value;
    //  this.pwd = this.loginForm.get('pwd{path:'user', component:UserComponent},').value;

    this.userService.login(this.loginForm.value).then(res=>{
       this.dialogRef.close(this.userService.username );
    })
    .catch(err=>{
        
        this.showLoginError  = err ;

    });

    

      // console.log(this.loginForm.value)                      

  }

}
