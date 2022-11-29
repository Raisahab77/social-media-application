import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MyServiceService } from '../services/my-service.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  isLoggedIn = false;
  constructor(private service:MyServiceService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
    // return false;
    if(this.service.isLoggedIn()){
      console.log('in if condition');
      return true;
    }
    else{
      console.log('in else condition');
      this.router.navigateByUrl('/');
      return false;
    }
  
  }
  
}
