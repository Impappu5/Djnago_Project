import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegister } from '../../../servicess/user-register';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form= new FormGroup({
   email:new FormControl('',[Validators.required,Validators.email]),
   password:new FormControl('',[Validators.required]),
 })


  constructor(private toastr: ToastrService, private router: Router, private userRegister:UserRegister) {

  }


  onLogin() {
    console.log(this.form.value)

    this.userRegister.login(this.form.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('access_token', res.access);
        alert("succcc")
        this.toastr.success("Login success",'success')
      },
      error: () =>{
        this.toastr.error("Login failed",'error')

      } 
    });
  }


   get email(){
    return this.form.get('email');
  }
   get password(){
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
  