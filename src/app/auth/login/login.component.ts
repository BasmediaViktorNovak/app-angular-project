import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(public authService: AuthService,
              public router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  public login(): void {
    this.authService.login(
      {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      }
    )
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/admin']);
        }
      });
  }


  navigateOnMainPage(): void {
    this.router.navigateByUrl('/');
  }
}
