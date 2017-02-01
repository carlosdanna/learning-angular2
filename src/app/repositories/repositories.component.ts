import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos: any;
  route : Router;
  constructor(githubService: GithubService, router: Router) {
    this.route = router;
    githubService.getRepos()
      .subscribe(
      response => this.repos = response
      );

  }

  public openCommit(repo: string) {
    
    this.route.navigate(['/repositories', repo])
  }
  ngOnInit() {
  }

}
