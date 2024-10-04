import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false; //default false;

  constructor(private toastr: ToastrService) {
    console.log('HeaderComponent');

  }
  ngOnInit(): void {

    //fetch from localstorage whether user is loggedin
    this.isLoggedIn = localStorage.getItem("LOGGED_IN_USER") == 'true';
  }

  logout() {
    // localStorage.removeItem("LOGGED_IN_USER");
    localStorage.clear();
    this.toastr.success("Successfully LoggedOut !!!");
    window.location.href = "/login";
  }
}
