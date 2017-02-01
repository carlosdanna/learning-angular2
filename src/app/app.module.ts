import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ContainerAreaComponent } from './container-area/container-area.component';
import { GithubService } from './github.service';
import { HomeComponent } from './home/home.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { CommitsComponent } from './commits/commits.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'repositories', component: RepositoriesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    ContainerAreaComponent,
    HomeComponent,
    RepositoriesComponent,
    CommitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
