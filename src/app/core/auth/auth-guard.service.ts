import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.authService.isLogged()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['login']);
          }
        })
      );
  }

}
