import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'fa-app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

  private commits: Observable<any[]>;
  private repo: string;
  constructor(private githubService: GithubService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.repo = params['repo'];
      console.log(this.repo);
      this.githubService.getCommits(this.repo)
      .subscribe(
      response => this.commits = response
      );
    });
    
  }

}
