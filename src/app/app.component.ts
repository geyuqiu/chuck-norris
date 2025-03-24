import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck-norris';
  public authenticated: boolean;
  public registered: false;

  handleLogin() {
    this.authenticated = true;
  }
}
