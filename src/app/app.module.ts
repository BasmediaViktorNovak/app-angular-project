import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material-angular-ui/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from './services/weather-service/weather.service';
import {AdService} from './container/header-container/banner/ad.service';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService, AdService, FormBuilder, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
