import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLogged(): boolean {
    return true;
  }

  login(): void {
    console.log('Do stuff to log in');
    this.router.navigate(['']);
  }

  logout(): void {
    console.log('Do stuff to log out');
    this.router.navigate(['login']);
  }

}
