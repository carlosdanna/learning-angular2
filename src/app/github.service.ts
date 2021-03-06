import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getRepos() {
    return this.http.get('https://api.github.com/users/carlosdanna/repos')
      .map(response => response.json());
  }
  getCommits(repo :string) {
    return this.http.get(`https://api.github.com/repos/carlosdanna/${repo}/commits`)
      .map(response => response.json());
  }
}
