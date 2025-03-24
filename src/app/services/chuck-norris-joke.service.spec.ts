import {ChuckNorrisJokeService} from './chuck-norris-joke.service';
import {of, throwError} from 'rxjs';
import createSpyObj = jasmine.createSpyObj;
import {delay} from 'rxjs/operators';

describe('ChuckNorrisJokeService', () => {
  let service: ChuckNorrisJokeService;
  let httpClientMock: any;
  const expectedJoke = 'expectedJoke';

  beforeEach(() => {
    httpClientMock = createSpyObj(['get']);
    httpClientMock.get.and.callFake(url => {
      if (url === 'http://api.icndb.com/jokes/random') {
        return of({value: {joke: expectedJoke}}).pipe(delay(200));
      }
      return throwError('didn\'t call correct API');
    });
    service = new ChuckNorrisJokeService(httpClientMock);
  });

  it('fetches joke from API', (done) => {
    service.fetchNorrisJoke().subscribe(joke => {
      expect(joke).toEqual(expectedJoke);
      done();
    });
  });
});
