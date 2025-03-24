import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard  {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authenticated = !!this.authenticationService.jwtToken;
    if (!authenticated){
      this.router.navigate(['/login']);
    }
    return authenticated;
  }
}
