import { Component } from '@angular/core';
import { ChuckNorrisJokeService } from '../../services/chuck-norris-joke.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { QuotationPipe } from '../../pipes/quotation.pipe';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
  imports: [
    AsyncPipe,
    QuotationPipe,
    NgIf
  ],
  standalone: true
})
export class JokeComponent {

  constructor(private chuckNorrisJokeService: ChuckNorrisJokeService) {
  }

  joke$: Observable<string>;

  showAChuckNorrisJoke(): void {
    this.joke$ = this.chuckNorrisJokeService.fetchNorrisJoke();
  }
}
