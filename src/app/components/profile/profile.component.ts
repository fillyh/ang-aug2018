import { Component, OnInit } from '@angular/core';

import { IUser } from '../../interfaces/i-user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser;
  url: string = '';
  // currentProfile: IUser;


  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  getId() {
    this.route.params.subscribe(params => {
      this.getUser(params.id);
    });
  }
  getUser(id) {
    this.userService.getUser(id).subscribe((user: any) => {
      this.user = user;
      this.userService.currentProfile = user;
    });
  }

  getUrl(){
    // this.url = this.router.url;
    console.log(this.route.children);
    console.log(this.route.snapshot.url);
  }

  ngOnInit() {
    this.getId();
    this.getUrl();
  }

}
