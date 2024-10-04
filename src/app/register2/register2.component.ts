import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register2',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register2.component.html',
  styles: ``
})
export class Register2Component implements OnInit {

  regForm!: FormGroup;
  // name!: string;
  // email!: string;
  // password!: string;

  constructor() {
    console.log('RegisterComponent constructor called');
  }
  ngOnInit(): void {
    this.regForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      password: new FormControl('', [Validators.minLength(8)])
    });
  }

  onSubmit() {
    console.log('Form Submitted');
    console.log("valid", this.regForm.valid);
    console.log('value', this.regForm.value);
    const userObj = this.regForm.value;
    console.log('UserObj:', userObj);

    // console.log('Name:', this.name + ",email:", this.email + ",password:" + this.password);

    // if (this.password.length < 8) {
    //   alert("Password is too short. Password must atleast 8 digit");
    // }
    // const userObj = {
    //   name: this.name,
    //   email: this.email,
    //   password: this.password
    // };



    //1. send userObj to backend REST API url => insert the user details into database
    //axios.post(url, userObj).then (res=> ...)

    //2. Temporarily storing users data in localStorage
    const users = [];
    users.push(userObj);
    localStorage.setItem("USERS", JSON.stringify(users));

    // alert("Successfully Registered");
    //toastr.success("Successfully Registered");

    window.location.href = "/login";

  }
}
