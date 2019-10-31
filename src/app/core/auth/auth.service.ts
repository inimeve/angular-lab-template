import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLogged(): boolean {
    const isLogged: string = localStorage.getItem('isLogged');
    return isLogged == 'true';
  }

  login(): void {
    localStorage.setItem('isLogged', 'true');
    this.router.navigate(['']);
  }

  logout(): void {
    localStorage.removeItem('isLogged');
    this.router.navigate(['login']);
  }

}
