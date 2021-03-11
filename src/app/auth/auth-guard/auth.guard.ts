import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';
import {AuthService} from '../../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(): boolean {
    return this.canLoad();
  }

  canLoad(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }


}
