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
   username: '',
   password: '',
   published: false
 };
 submitted: false;

  constructor(private apiService: ApiService) {

   }

  ngOnInit(): void {
  }


  register(){
    const data = {
      username: this.user.username,
      password: this.user.password,
    };

    this.apiService.create(data).subscribe(response => {console.log(response); } , error => console.log(error));

  }
  newReg(){
    this.submitted = false;
    this.user = {
      username: '',
   password: '',
   published: false
    }
  }

}
