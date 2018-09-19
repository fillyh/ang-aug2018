import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenLength = 12;
  tokenArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService, private router: Router) { }

  generateToken(both){
    let rndString = '';
    for (let i = 0; i < this.tokenLength; i++){
      let rndNumber = Math.ceil(Math.random() * this.tokenArray.length) -1;
      rndString = rndString + this.tokenArray[rndNumber];
    }
    this.setToken(rndString, both);
  }
  setToken(token, both){
    if (both){
    this.sessionStorage.set('token', token);
    this.localStorage.set('token', token);
  } else {
    this.sessionStorage.set('token', token);
  }
  }

  setTokenLocal(){

  }

  checkToken(redirect){
    const localToken = this.localStorage.get('token');
    const sessionToken = this.sessionStorage.get('token');
    if(localToken !== sessionToken){
      alert('You do not have the same token!');
      this.router.navigateByUrl(redirect);
    }
  }
}
