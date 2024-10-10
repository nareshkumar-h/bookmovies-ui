import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../components/page/page.component';
import { BadgeComponent } from '../components/badge/badge.component';

@Component({
  selector: 'app-view-movie',
  standalone: true,
  imports: [CommonModule, PageComponent, BadgeComponent],
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

  addToCart(movie: any) {

    //create empty array always
    // const cartItems = [];

    //1. find existing cart items and add item in that list
    const cartItemStr = localStorage.getItem("CART");
    const cartItems = cartItemStr != null ? JSON.parse(cartItemStr) : [];

    //add item
    cartItems.push(movie);

    //store in db
    localStorage.setItem("CART", JSON.stringify(cartItems));

    //redirect to cart page
    alert("Added items to cart");
    window.location.href = "/cart";
  }

}
