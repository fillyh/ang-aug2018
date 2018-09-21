import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

currentUser: any;

  constructor(private http: Http, private router: Router) { }

  login(credentials) {
    return this.http.post('/api/authenticate', JSON.stringify(credentials)).pipe(map(response => {
      // console.log(response.json);
      const result = response.json();
      if (result && result.token){
        localStorage.setItem('token', result.token);
        console.log('it works: ' + result.token);
        const jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
        return true;
      } else{
      return false;
    }
    }));
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUser = null;
    this.router.navigateByUrl('/login');
  }

  isLoggedIn(){
    return tokenNotExpired;
  }

  get currentUsers(){
    const token = localStorage.getItem('token');
    if (!token){
      return null;
    } else {
      const jwtHelper = new JwtHelper();
      return jwtHelper.decodeToken(token)
    }
  }
}
