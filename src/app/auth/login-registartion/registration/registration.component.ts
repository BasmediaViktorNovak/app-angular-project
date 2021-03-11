import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public authService: AuthService,
              public router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      username: [''],
      password: ['']
    });
  }

  registration(): void {
    this.authService.registrationFireBase(this.loginForm.value).subscribe(isResult => {
      if (isResult) {
        this.router.navigateByUrl('auth/login');
      }
    });
  }
}
