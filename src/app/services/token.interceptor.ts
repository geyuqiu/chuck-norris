import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authenticationService.jwtToken) {
      const authHeader = 'Bearer ' + this.authenticationService.jwtToken.token;
      const newReq = request.clone({
        setHeaders: {
          Authorization: authHeader
        }
      });
      return next.handle(newReq);
    }
    return next.handle(request);
  }
}
