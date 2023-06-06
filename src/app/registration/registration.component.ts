import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public authService: AuthService, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get formControls() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.registrationForm.invalid) {
      this.authService.login();
      this.router.navigate(["/"])
    }
    if (this.registrationForm.invalid) {
      return;
    }
  }
}