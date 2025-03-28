import {RegistrationService} from './../../services/registration.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  imports: [
    ReactiveFormsModule
  ],
  standalone: true
})
export class RegistrationComponent {
  registrationError: string;

  public registrationForm: UntypedFormGroup;

  constructor(
    private registrationService: RegistrationService,
    private router: Router, private formBuilder: UntypedFormBuilder) {
    this.registrationForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      firstName: this.formBuilder.control('', [Validators.required]),
      lastName: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
    });
  }

  register(): void {
    this.registrationService.register(this.registrationForm.value).subscribe(
      (user) => {
        this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => (this.registrationError = err.message)
    );
  }
}
