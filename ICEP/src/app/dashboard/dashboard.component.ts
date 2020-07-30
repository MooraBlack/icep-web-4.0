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
  admin: any;
  ngOnInit(): void {
    this.getStud();
  }

  getStud(){
    this.api.getAllReg().subscribe((data: any) => {this.regStud = data; console.log(data);});
  }

  _opened: boolean = true;

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  getAdmn(){
    this.api.getAdminProf().subscribe((dat: any) => {this.admin = dat; console.log(dat);});
  }
}
