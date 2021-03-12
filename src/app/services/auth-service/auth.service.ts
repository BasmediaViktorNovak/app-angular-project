import {Injectable} from '@angular/core';
import {Observable, of, Subject, Subscription} from 'rxjs';
import {tap, mapTo, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Tokens} from '../../model-clasess/tokens';
import {JwtHelperService} from '@auth0/angular-jwt';
import {WeatherService} from '../weather-service/weather.service';
import {UserData} from '../../model-clasess/user-data';
import * as bcrypt from 'bcryptjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({providedIn: 'root'})
export class AuthService {
  private JWT_TOKEN: string;
  private REFRESH_TOKEN: string;
  private loggedUser: string;
  private decodeToken: any;
  private helper = new JwtHelperService();

  constructor(private http: HttpClient,
              private weatherService: WeatherService,
              private db: AngularFireDatabase) {
  }

  public login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`http://localhost:8080/login`, user)
      .pipe(
        tap(tokens => {
          this.doLoginUser(user.username, tokens);
          /*Decode tokens*/
          this.decodeToken = this.helper.decodeToken(tokens.jwt);
          console.log('Decode Data', new UserData(this.decodeToken));
          /*End Decode tokens*/
        }),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        })
      );
  }

  public registrationFireBase(user: { email: string, username: string, password: string }): Observable<boolean> {
    try {
      user.password = bcrypt.hashSync(user.password, 10);
      this.db.list('users').push(user);
      return of(true);
    } catch (e) {
      console.log('Exception', e.message);
      return of(true);
    }
  }


  public loginFireBase(user: { username: string, password: string }): Observable<boolean> {
    const resultSubj: Subject<boolean> = new Subject<boolean>();

    this.db.list('users').valueChanges().subscribe(val => {
      // @ts-ignore
      const findUser = val.find(x => x.username === user.username);
      // @ts-ignore
      bcrypt.compare(user.password, findUser.password, (err, result) => {
        resultSubj.next(result ? result : false);
      });
    });
    return resultSubj.asObservable();
  }


  public logout(): Observable<boolean> {
    return this.http.post<any>(`http://localhost:8080/login`, {
      refreshToken: this.getRefreshToken()
    }).pipe(
      tap(tokens => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  public isLoggedIn = (): boolean => !!this.getJwtToken();

  public refreshToken(): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/refresh`, {
      refreshToken: this.getRefreshToken()
    }).pipe(
      tap((tokens: Tokens) => {
        this.storeJwtToken(tokens.jwt);
      }));
  }

  public getJwtToken = (): any => localStorage.getItem(this.JWT_TOKEN);

  public doLoginUser(username: string, tokens: Tokens): void {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }


  private getRefreshToken(): any {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken = (jwt: string): any => localStorage.setItem(this.JWT_TOKEN, jwt);

  public storeTokens(tokens: Tokens): void {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  public doLogoutUser(): void {
    this.loggedUser = null;
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }


}
