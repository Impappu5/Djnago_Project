import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegister } from '../../../servicess/user-register';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../servicess/auth-service';




@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
  auth: any;


  constructor(private toastr: ToastrService, private router: Router, private authService: AuthService) {

  }

  onLogin() {
    console.log(this.form.value)
    this.authService.login(this.form.value).subscribe({
      next: (res: any) => {
        this.authService.saveTokens(res.access, res.refresh);
        // this.router.navigate(['/profile']);
      },
      error: () => alert('Invalid credentials')
    });
  }
  credentials(credentials: any) {
    throw new Error('Method not implemented.');
  }


  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }


  forgotPassword() {
    console.log('Forgot password clicked');

  }

  // //////Go to signup link
  goToSignup(event: Event) {
    event.preventDefault();
    console.log('Navigate to signup page');

  }

}
