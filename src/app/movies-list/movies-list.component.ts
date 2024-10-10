import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { PageComponent } from '../components/page/page.component';
declare var bootstrap: any;

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, MovieCardComponent, PageComponent],
  templateUrl: './movies-list.component.html',
  styles: ``
})
export class MoviesListComponent implements OnInit {

  //Data 
  movies!: any[];

  language!: string;

  movieType!: string;

  price!: number;

  minPrice!: number;

  maxPrice!: number;

  public loading = true;

  //const obj = new ClassName();
  //const movieService = new MovieService();
  //movieService.methodCall()
  constructor(private movieService: MovieService) {
    console.log('MoviesListComponent');
  }

  ngOnInit(): void {
    console.log("OnInit method called");
    this.movies = this.movieService.getAllMovies(); //3s,5s backend db
    this.loading = false;
    console.log('movies', this.movies);
  }

  reset() {
    this.movies = this.movieService.getAllMovies();
  }


  applyFilter() {

    // alert("Language:" + this.language);
    // alert("movieType" + this.movieType);
    // alert("Price:" + this.minPrice + "-" + this.maxPrice);

    //if user selected language filter, then apply the filter
    if (this.language) {
      this.movies = this.movies.filter(obj => obj.language == this.language);
    }

    //if movietype is selected
    if (this.movieType) {

      this.movies = this.movies.filter(obj => obj.description.includes(this.movieType));
    }

    //if price filter is applied - min 1, max:100

    if (this.minPrice && this.maxPrice) {
      this.movies = this.movies.filter(obj => obj.price >= this.minPrice && obj.price <= this.maxPrice);
      console.log('price filter');
      console.table(this.movies);
    }

  }


}
