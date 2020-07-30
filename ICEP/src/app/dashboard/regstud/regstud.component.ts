import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-regstud',
  templateUrl: './regstud.component.html',
  styleUrls: ['./regstud.component.css']
})
export class RegstudComponent implements OnInit {

  students: any;
  currentStudent = null;
  currentIndex = -1;
  lname = '';
  constructor(private api: ApiService) { }

  ngOnInit(): void {
   this.getAllStudents();
  }

  getAllStudents(){
    this.api.getAllReg().subscribe(
      data => {
        this.students = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  refreshList() {
    this.getAllStudents();
    this.currentStudent = null;
    this.currentIndex = -1;
  }
  setActiveTStudent(stud, index) {
    this.currentStudent = stud;
    this.currentIndex = index;
  }
  removeAllStudents() {
    this.api.deleteAllApplication()
      .subscribe(
        response => {
          console.log(response);
          this.getAllStudents();
        },
        error => {
          console.log(error);
        });
  }
  searchStud() {
    this.api.searchByName(this.lname)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
