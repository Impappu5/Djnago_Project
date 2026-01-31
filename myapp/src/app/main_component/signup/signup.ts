import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../servicess/auth-service';
import { UserRegister } from '../../../servicess/user-register';
// import { Auth } from '../auth';



@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required])

  })

  constructor(private toastr: ToastrService, private authService: AuthService, private userRegister: UserRegister) {

  }
  // ngOnInit() {
  //   this.getMemberList();
  // }


  onSignup() {

    this.authService.register(this.registerForm.value).subscribe({
      next: () => alert('Registration successful'),
      error: err => alert(err.error)
    });
  }




  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  // ///////get anther code/////
  // getMemberList() {
  //   this.authService.getMemberList().subscribe((data: any) => {
  //     console.log('data', data);
  //   })
  // }


}