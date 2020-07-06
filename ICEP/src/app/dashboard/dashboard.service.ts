import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //my step 1 done*


// API

//const dashboardUrl ='http://localhost:5000/admin_profile'; //not successful

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboardUrl ='http://localhost:5000/admin_profile'; // step 2 not successful, when i make it constant variable it doesnt recogise it when im returning 

  constructor(private dashAdmin: HttpClient) { }

  getDashProf() //function to retrieve info from the backend
  {
     return this.dashAdmin.get<any>(this.dashboardUrl); // we are getting info stored in the variable we created
  }
}
