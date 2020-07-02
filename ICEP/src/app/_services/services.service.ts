import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // tslint:disable-next-line: variable-name
  project_URL = 'localhost:'; // get the projects
  // tslint:disable-next-line: variable-name
  reg_URL = '';
  constructor(private http: HttpClient) { }

  projects(){

    return this.http.get<any>(this.project_URL);
  }
  // -------------------------------------------------------------------------
  // REGISTRATION
  // -------------------------------------------------------------------------
    //LOGIN
    

}
