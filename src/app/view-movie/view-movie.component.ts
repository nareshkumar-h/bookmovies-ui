import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-movie.component.html',
  styles: ``
})
export class ViewMovieComponent implements OnInit {

  // movieName!: string;
  movieId!: number;

  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.movieId = this.route.snapshot.params["id"];


  }
  ngOnInit(): void {

    //this.movie = this.movies.find(obj => obj.title == this.movieName); //Find the 1st matched element

    this.movie = this.movieService.getMovieById(this.movieId);
  }

}
