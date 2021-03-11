import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.authService.logout().subscribe(success => {
      if (success) {
        console.log('SUCCESS');
        this.router.navigate(['/login']);
      }
    });
  }

}
