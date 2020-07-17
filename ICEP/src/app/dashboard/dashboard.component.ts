import { Component, OnInit } from '@angular/core';
import {ApiService } from './../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api: ApiService) { }
  regStud: any = [];
  ngOnInit(): void {
    this.getStud();
  }

  getStud(){
    this.api.getAllReg().subscribe((data: any) => {this.regStud = data; console.log(data);});
  }
}
