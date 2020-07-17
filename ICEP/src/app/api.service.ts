import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Api
const baseUrl = 'localhost:5000/routes';
const regUrl = 'http://localhost:5000/register';
const adminProfileUrl = 'http://localhost:5000/admin_profile'; // succesful
const reportUrl = 'http://localhost:5000/report';
const applicationUrl = 'http://localhst:5000/application';
const studProfUrl = 'http://localhost:5000/student_profile'; // successful
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllReg(){
   return this.http.get(studProfUrl);
  }
  getReg(id){
    this.http.get('${regUrl}/${id}');
  }

  public createReg(data){// for registration
    return this.http.post(regUrl, data);
  }
  public updateReg(id, data){
    return this.http.put('${regUrl}/${id}', data);
  }
  public deleteReg(id){
   return  this.http.delete('${regUrl}/${id}');
  }
  deleteAllReg(){
    this.http.delete(regUrl);
  }

  getAllApplication(){
    this.http.get(applicationUrl);
   }
   getApplication(id){
     this.http.get('${applicationUrl}/${id}');
   }

   public createApplication(data){// for Applicationistration
     return this.http.post(applicationUrl, data);
   }
   public updateApplication(id, data){
     return this.http.put('${applicationUrl}/${id}', data);
   }
   public deleteApplication(id){
    return  this.http.delete('${applicationUrl}/${id}');
   }
   deleteAllApplication(){
     this.http.delete(applicationUrl);
   }
  // this one is for search, by name
  searchByName(name){
   this.http.get('${regUrl}?name=${name}');
  }
}
