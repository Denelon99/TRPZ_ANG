import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpApiService } from '../services/httpapi.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  errorMessage: string = '';
  storages: any[] | undefined;

  constructor(
    private httpApiService: HttpApiService,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      role: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      storageId: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.httpApiService.getStorages().subscribe(
      (data) => {
        console.log('API Response:', data);
        this.storages = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }

    const role = Number(this.formControls['role'].value);
    const username = this.formControls['username'].value;
    const password = this.formControls['password'].value;
    const storageId = this.formControls['storageId'].value;

    this.authService.registerUser(username, password, role, storageId).subscribe(
      () => {
        console.log('Registration successful');
      },
      (error) => {
        console.error('Registration failed:', error);
        this.errorMessage = 'Registration failed. Please try again later.';
      }
    );
    this.authService.login(username, password).subscribe(
      (isLoggedIn) => {
        if (isLoggedIn) {
          this.authService.loggedIn = true;
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Login failed. Please try again later.';
      }
    );
  }
}
