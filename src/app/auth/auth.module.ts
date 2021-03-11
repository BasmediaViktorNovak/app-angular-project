import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './token/token.interceptor';
import {AuthGuard} from './auth-guard/auth.guard';
import {AuthService} from '../services/auth-service/auth.service';
import {RegistrationComponent} from './login-registartion/registration/registration.component';
import {LoginComponent} from './login-registartion/login/login.component';
import {MaterialModule} from '../material-angular-ui/material.module';
import {ModeButComponent} from './login-registartion/mode-change-form/mode-but.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ModeButComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [ModeButComponent, FormsModule, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuthModule {
}
