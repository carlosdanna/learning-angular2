import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos: any 
  constructor(githubService: GithubService) { 
    githubService.getRepos()
      .subscribe(
        response => this.repos = response
      );

  }

  ngOnInit() {
  }

}
