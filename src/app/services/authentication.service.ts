import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JWTToken } from '../models/JWTToken';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

   jwtToken: JWTToken;

  constructor(private httpClient: HttpClient) {
  }

  login(userName: string, password: string): Observable<JWTToken> {
    return this.httpClient.post<JWTToken>(
      environment.api.login,
      {email: userName, password}
    ).pipe(
      tap((token: JWTToken) => {
        this.jwtToken = token;
      })
    );
  }
}
