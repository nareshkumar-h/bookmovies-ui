import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastr: ToastrService, private fb: FormBuilder) {
    console.log('RegisterComponent constructor called');
  }
  ngOnInit(): void {
    // this.regForm = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.minLength(8), Validators.maxLength(12)])
    // });
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8), Validators.maxLength(12)]]
    });
  }

  get name() {
    return this.regForm.controls["name"];
  }

  get email() {
    return this.regForm.controls["email"];
  }

  get password() {
    return this.regForm.controls["password"];
  }

  onSubmit() {
    console.log('Form Submitted');
    console.log("valid", this.regForm.valid);
    console.log('value', this.regForm.value);//used to get form values
    const userObj = this.regForm.value;
    console.log('UserObj:', userObj);

    if (this.regForm.invalid) {
      // alert("Please fill all the details");
      this.toastr.error("Please fill all the details");
    } else {


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
      this.toastr.success("Successfully Registered");

      window.location.href = "/login";

    }

  }
}
