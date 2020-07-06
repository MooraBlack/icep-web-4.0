import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service' //Import for the path for the dash service 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  adminDash: any; //variable to store information from backend used in HTML NB*
  constructor(private adminD:DashboardService) { } //instantiated an object called "adminD"
  
  public getdashProfs()
  {
   // return this.adminD.getDashProf().subscribe((data:any) => {this.adminDash=data; console.log(this.adminDash);}) //not ready for use since the variables need to be changed
  }
  ngOnInit(): void {
  }

}
