import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mode-but',
  templateUrl: './mode-but.component.html',
  styleUrls: ['./mode-but.component.css']
})
export class ModeButComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {

  }

  navigateOnMainPage(): void {
    this.router.navigateByUrl('/');
  }

  navigateOnLoginPage(): void {
    this.router.navigateByUrl('auth/login');
  }

  navigateOnRegistrationPage(): void {
    this.router.navigateByUrl('auth/registration');
  }

}
