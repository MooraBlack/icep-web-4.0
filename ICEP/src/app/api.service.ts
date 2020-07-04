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

  getAll(){
   this.http.get(regUrl);
  }
  get(id){
    this.http.get('${regUrl}/${id}');
  }

  public create(data){
    return this.http.post(regUrl, data);
  }
  public update(id, data){
    return this.http.put('${regUrl}/${id}', data);
  }
  public delete(id){
   return  this.http.delete('${regUrl}/${id}');
  }
  deleteAll(){
    this.http.delete(regUrl);
  }

  // this one is for search, by name
  searchByName(name){
   this.http.get('${regUrl}?name=${name}');
  }
}
