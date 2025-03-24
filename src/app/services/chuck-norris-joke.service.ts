import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisJokeService {

  constructor(private httpClient: HttpClient) {
  }

  fetchNorrisJoke(): Observable<string> {
    return this.httpClient.get<ChuckNorrisApiResponse>(environment.api.joke)
      .pipe(map(response => response.value));
  }
}

interface ChuckNorrisApiResponse {
  value: string;
}
