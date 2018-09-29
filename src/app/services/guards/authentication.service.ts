import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    const token = localStorage.getItem('tokenId');

    if (localStorage.getItem('tokenId')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }


}
