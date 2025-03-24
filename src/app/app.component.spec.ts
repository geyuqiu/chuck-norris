import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MockComponents} from 'ng-mocks';
import {JokeComponent} from './components/joke/joke.component';
import {By} from '@angular/platform-browser';
import {LoginComponent} from './components/login/login.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponents(JokeComponent, LoginComponent)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chuck-norris'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chuck-norris');
  });

  it('contains a login component at startup', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const loginComponent = fixture.debugElement.query(By.directive(LoginComponent)).componentInstance;
    expect(loginComponent).toBeTruthy();
  });

  it('shows joke component when authenticated', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const loginComponent: LoginComponent = fixture.debugElement.query(By.directive(LoginComponent)).componentInstance;
    loginComponent.loggedId.emit();
    fixture.detectChanges();
    const jokeComponent = fixture.debugElement.query(By.directive(JokeComponent)).componentInstance;
    expect(jokeComponent).toBeTruthy();
  });
});
