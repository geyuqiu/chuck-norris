import { LoginComponent } from './components/login/login.component';
import { JokeComponent } from './components/joke/joke.component';
import { Routes } from '@angular/router';
import { AuthenticatedGuard } from './services/authenticated.guard';
import { RegistrationComponent } from './components/registration/registration.component';

export const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: JokeComponent,
    canActivate: [AuthenticatedGuard]
  },
  {path: '**', redirectTo: ''}
];
