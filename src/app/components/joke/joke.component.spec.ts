import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JokeComponent} from './joke.component';
import {ChuckNorrisJokeService} from '../../services/chuck-norris-joke.service';
import {of} from 'rxjs';
import {By} from '@angular/platform-browser';
import {QuotationPipe} from '../../pipes/quotation.pipe';
import {MockPipe} from 'ng-mocks';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  const expectedChuckNorrisJoke = 'someChuckNorrisJoke';

  beforeEach(async () => {
    const jokeServiceMock = jasmine.createSpyObj(['fetchNorrisJoke']);
    jokeServiceMock.fetchNorrisJoke.and.returnValue(of(expectedChuckNorrisJoke));
    await TestBed.configureTestingModule({
      declarations: [JokeComponent, MockPipe(QuotationPipe, (input => input))],
      providers: [
        {provide: ChuckNorrisJokeService, useValue: jokeServiceMock}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show only button on startup', () => {
    const button: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.innerText).toEqual('Gib mir einen Chuck Norris Witz!');
    expect(fixture.debugElement.query(By.css('p.alert'))).toBeFalsy();
  });

  it('shows joke from service after click', () => {
    const button: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    const jokeParagraph: HTMLElement = fixture.debugElement.query(By.css('p.alert')).nativeElement;
    expect(jokeParagraph.innerText).toEqual(expectedChuckNorrisJoke);

  });
});
