import { Component, OnInit } from '@angular/core';
import {GithubService } from '../../services/github.service';
// import { SearchPipe } from ''

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  repos: any;
  searchText: any;

  constructor( private github: GithubService) { }

  getAllRepos(){
    this.github.getAllRepos().subscribe( res => {this.repos = res; console.log(res[1].created_at); console.log(res);});
  }

  showDescription(desc){
    if(desc === null){
      return 'There is no description available';
    } else{
      return desc;
    }
  }

  checkDate(createdDate){
    const d = new Date();
    const created = new Date(createdDate);
    d.setFullYear( d.getFullYear() + 1);
    if ( d > created){
      return true;
    }

  }

  ngOnInit() {
    this.getAllRepos();
  }

}
