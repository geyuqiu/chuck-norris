import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    FormsModule
  ],
  standalone: true
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
