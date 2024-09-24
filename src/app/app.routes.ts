import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: ViewMovieComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
