import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'fa-container-area',
  templateUrl: './container-area.component.html',
  styles:[ `
    .art{
      margin: 5px 30px 5px 0px;
      text-align: justify;
    }
  `]
})
export class ContainerAreaComponent implements OnInit {
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
