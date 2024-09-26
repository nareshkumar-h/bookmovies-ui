import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor() {
    console.log('LoginComponent');
  }

  onSubmit() {
    console.log('Form Submitted');
    console.log('Email:', this.email, ',Password:' + this.password);

    //Backend API url ( data: email,password )
    //if admin@gmail.com, pass123 , valid login

    // if (this.email == "admin@gmail.com" && this.password == "pass123") {


    // 1. Fetch the registered user details from localStorage
    const usersStr = localStorage.getItem("USERS"); // returns in string
    const users = usersStr != null ? JSON.parse(usersStr) : []; // convert string to object 

    //Using find check the input email/password matches
    //axios.post(url, data).then(res=> { ... })
    const userExists = users.find((obj: any) => obj.email == this.email && obj.password == this.password);

    if (userExists != null) {
      alert("Successfully Loggedin");
      localStorage.setItem("LOGGED_IN_USER", "true");
      localStorage.setItem("EMAIL", this.email);

      //redirect
      window.location.href = "/movies";
    }
    else {
      alert("Invalid Login Credentials");
    }
  }
}
