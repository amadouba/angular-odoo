import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private usr: UserService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.usr.isLoggedIn().then(res=>{
            if (res){
                return true;
            }
             // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);// { queryParams: { returnUrl: state.url }});
        return false;
        });

       
    }
}