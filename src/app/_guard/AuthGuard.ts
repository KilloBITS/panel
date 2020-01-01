import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Globals} from '../globals';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, public auth: Globals) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.auth) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
