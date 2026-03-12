import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth-service';
import { RegisterResponse } from '../../models/register-response';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.email],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();

      return;
    }

    const payload = this.registerForm.value;

    this.authService.register(payload).subscribe({
      next: (res: RegisterResponse) => {
        Swal.fire({
          icon: 'success',
          title: 'Registration successful',
          text: 'You can now log in with your credentials.',
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          this.router.navigate(['/auth/login']);
        });
      },

      error: (err) => {
        if (err.status === 400 && err.error?.message === 'Username already exists') {
          Swal.fire({
            icon: 'error',
            title: 'Registration failed',
            text: 'Username already exists. Please choose a different username.',
            confirmButtonColor: '#1e3a5f',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration failed',
            text: 'An unexpected error occurred. Please try again later.',
            confirmButtonColor: '#1e3a5f',
          });
        }
      },
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;

    if (password !== confirm) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }
}
