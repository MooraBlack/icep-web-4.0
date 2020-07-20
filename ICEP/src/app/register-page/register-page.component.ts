import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})


export class RegisterPageComponent implements OnInit {
 user = {
   first_name: '',
   last_name: '',
   phone_no: '',
   email: '',
   password: ''

   // published: false
 };
 submitted: false;

  constructor(private apiService: ApiService) {

   }

  ngOnInit(): void {
  }


  register(){
    const data = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      phone_no: this.user.phone_no,
      email: this.user.email,
      password: this.user.password,
    };

    this.apiService.createReg(data).subscribe(response => {console.log(response); } , error => console.log(error));

  }
  newReg(){
    this.submitted = false;
    this.user = {
      first_name: '',
      last_name: '',
      phone_no: '',
      email: '',
      password: ''
  // published: false
   };
  }

}
