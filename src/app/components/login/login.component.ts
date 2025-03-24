import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent{

  model: Credentials = {} as Credentials;

  loginError: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  login(): void {
    this.authenticationService.login(this.model.userName, this.model.password).subscribe(() => {
      this.router.navigate(['/']);
    }, (err) => {
      this.loginError = err;
    });
  }
}

interface Credentials {
  userName: string;
  password: string;
}
