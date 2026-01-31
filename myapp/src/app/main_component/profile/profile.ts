import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../../../servicess/user-register';
import { Router } from '@angular/router';
import { AuthService } from '../../../servicess/auth-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

   user: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // this.authService.profile().subscribe({
    //   next: data => this.user = data,
    //   error: () => this.router.navigate(['/login'])
    // });
  }

  logout() {
    const refresh = localStorage.getItem('refresh')!;
    this.authService.logout(refresh).subscribe(() => {
      this.authService.clearTokens();
      this.router.navigate(['/login']);
    });
  }
}


