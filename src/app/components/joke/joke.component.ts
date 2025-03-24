import { Component } from '@angular/core';
import { ChuckNorrisJokeService } from '../../services/chuck-norris-joke.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {

  constructor(private chuckNorrisJokeService: ChuckNorrisJokeService) {
  }

  joke$: Observable<string>;

  showAChuckNorrisJoke(): void {
    this.joke$ = this.chuckNorrisJokeService.fetchNorrisJoke();
  }
}
