import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (localStorage.getItem("currentUser")) {
        return true;
    }
    else{
      this.router.navigateByUrl('/login');
    }
  
}
}
