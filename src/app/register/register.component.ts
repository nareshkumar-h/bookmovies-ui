import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {

  name!: string;
  email!: string;
  password!: string;

  constructor() {
    console.log('RegisterComponent constructor called');
  }

  onSubmit() {
    console.log('Form Submitted');
    console.log('Name:', this.name + ",email:", this.email + ",password:" + this.password);

    const userObj = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    console.log('UserObj:', userObj);

    //1. send userObj to backend REST API url => insert the user details into database
    //axios.post(url, userObj).then (res=> ...)

    //2. Temporarily storing users data in localStorage
    const users = [];
    users.push(userObj);
    localStorage.setItem("USERS", JSON.stringify(users));

    alert("Successfully Registered");

    window.location.href = "/login";

  }

}
