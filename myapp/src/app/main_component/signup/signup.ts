import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../servicess/auth-service';
import { UserRegister } from '../../../servicess/user-register';
// import { Auth } from '../auth';



@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {

  registerForm= new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(3)]),
    confirmPassword: new FormControl('',[Validators.required])

  })

  constructor(private toastr: ToastrService, private authService: AuthService,private  userRegister:UserRegister) {

  }
  ngOnInit() {
    this.getMemberList();
  }
 

  onSignup() {

     //////Password Match Validation
  const password = this.registerForm.get('password')?.value;
  const confirmPassword = this.registerForm.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    this.toastr.error('Password do not match', 'Error');
    return;
  }

  if (this.registerForm.invalid) {
    this.toastr.error('Form is invalid', 'Error');
    return;
  }

   console.log(this.registerForm.value);


      this.userRegister.signup(this.registerForm.value).subscribe({
      next: res =>{
        this.toastr.success('Signup success','Account created');
        this.registerForm.reset()

      } ,
    
      error: err =>{
        this.toastr.error('this email already exists  ','Error');

      } 
    });



   //////Password Match Validation/////////
  // const password = this.registerForm.get('password')?.value;
  // const confirmPassword = this.registerForm.get('confirmPassword')?.value;

  // if (password !== confirmPassword) {
  //   this.toastr.error('Password do not match', 'Error');
  //   return;
  // }

  // if (this.registerForm.invalid) {
  //   this.toastr.error('Form is invalid', 'Error');
  //   return;
  // }

  // console.log(this.registerForm.value);
  
     /////////////////Registernew update////////////////////////////////////////////////////
  //   this.userRegister.registerUser(this.registerForm.value).subscribe({
  //     next: res => {
  //       this.toastr.success('Signup success','Account created');
  //       this.registerForm.reset()
  //     },
      
  //      error: err =>{
  //       this.toastr.error('this email already exists  ','Error');
  //     }
  // });
  }
  
  get username(){
    return this.registerForm.get('username');
  }
   get email(){
    return this.registerForm.get('email');
  }
   get password(){
    return this.registerForm.get('password');
  } 
  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  } 

  // ///////get anther code/////
  getMemberList() {
    this.authService.getMemberList().subscribe((data: any) => {
      console.log('data', data);
    })
  }


}