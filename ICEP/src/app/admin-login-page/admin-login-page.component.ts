import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
 gotoDash()
 {
   this.route.navigateByUrl('/dashboard');
 }
}
