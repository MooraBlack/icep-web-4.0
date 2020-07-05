import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.css']
})
export class ApplicationPageComponent implements OnInit {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    mobileno: '',
    specialization: '',
    idno: '',
    gender: '',
    proglanguages: ''
    // published: false
  };
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  apply(){
    const data = {
    firstname: this.user.firstname,
    lastname: this.user.lastname,
    email: this.user.email,
    mobileno: this.user.mobileno,
    specialization: this.user.specialization,
    idno: this.user.idno,
    gender: this.user.gender,
    proglanguages: this.user.proglanguages
    }
    this.api.createApplication(data).subscribe(response => {console.log(response); } , error => console.log(error));
  }

}
