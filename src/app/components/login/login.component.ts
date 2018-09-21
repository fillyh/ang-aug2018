import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ErrorStateManager} from '../../classes/error-state-manager';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authUser = {
    emailFormControl: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: ""
  };
  matcher = new ErrorStateManager();
  invalidLogin: boolean;


  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }
login(credentials){
  // this.userService.login(this.authUser);

  this.authService.login(credentials).subscribe(result =>{
    if (result){
      this.router.navigate(['/']);
    } else {
      this.invalidLogin = true;
    }
  });
}

  ngOnInit() {
  }

}
