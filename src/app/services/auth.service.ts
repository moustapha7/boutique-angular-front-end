import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';




const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt : string;
  username :string;
  roles : Array<string>;

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  saveToken(jwt: string) {

    localStorage.setItem('token',jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  parseJWT()
  {
    let jwtHelper =  new  JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles =  objJWT.roles;
  }

  isAdmin()
  {
    return this.roles.indexOf('ADMIN')>0;
  }

  isUser()
  {
    return this.roles.indexOf('USER')>0;
  }
  
  isAuthenticated()
  {
    return this.roles &&( this.isAdmin() || this.isUser());
  }

  loadToken(){
   this.jwt = localStorage.getItem('token');
   this.parseJWT();
  }



}