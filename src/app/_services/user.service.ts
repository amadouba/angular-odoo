import { Injectable, OnInit } from '@angular/core';
import {OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc'


@Injectable({
    providedIn:'root',
})
export class UserService implements OnInit{
    loginState : boolean = false;
    username: string = '';
    context : any ;
    constructor(private odooRPC : OdooRPCService){}


    ngOnInit(){
        
    }

    login  (cred:{odoo_server:string , http_auth?:string, db:string, email:string , pwd:string }){
        this.odooRPC.init({
              odoo_server: cred.odoo_server,
              http_auth: cred.http_auth // optional
            });
        return this.odooRPC.login(cred.db, cred.email, cred.pwd)
              .then(res => {
                console.log('login success',res);
                this.loginState = true ;
                this.username = res.name ;
                localStorage.setItem("user", JSON.stringify(res));
                localStorage.setItem("username",this.username);


                return Promise.resolve();
                
              }).catch( err => {
                console.error( err);
                return Promise.reject(err) ;
              });
        
             
             
    }

    getUsername(){
      return this.username = localStorage.getItem('username');
    }

   
    logout(){
      this.odooRPC.logout();
      this.loginState = false ;
      localStorage.removeItem('user');
      localStorage.removeItem('username');
    }
    tryout(){
      return this.odooRPC.isLoggedIn(true);
    }
    sesionInf(){
      return this.odooRPC.getSessionInfo();
    }
    contex(){
      return this.odooRPC.getContext();
    }
    isLoggedIn(){
      // localStorage.getItem('user') ? true:false;
      let isAuthenticated;
      return  this.odooRPC.isLoggedIn(true).then(res =>{
          !localStorage.getItem('user') ? isAuthenticated = false: (res ? isAuthenticated = true: this.logout());
          this.loginState = isAuthenticated ;
          return Promise.resolve(isAuthenticated);
          
        }).catch(err=>{console.log(err);
          localStorage.getItem('user') ? this.logout():'';
        isAuthenticated= false;
        this.loginState = isAuthenticated;
        return Promise.resolve(isAuthenticated);

        });
     
    }

    


}