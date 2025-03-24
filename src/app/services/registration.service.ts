import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {FormBuilder, Validators} from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient){
  }

  register(newUser: User): Observable<User>{
    return this.httpClient.post<User>(environment.api.user, newUser);
  }
}
