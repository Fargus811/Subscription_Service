import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';
import { LogindetectorService } from '../logindetector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentPath: string;
  user: any;

  constructor(
    private location: Location,
    private router: Router,
    private sessionstorage: LocalstorageService,
    private loginDetector: LogindetectorService
    ) {
        this.router.events.subscribe(
          (val) => this.changeLocation());

        this.loginDetector.loginResult$.subscribe(
          (val) => this.checkUser());

     }

  changeLocation() {
    this.currentPath = this.location.path();
  }

  checkUser() {
    console.log('I LIVE');
    const token = localStorage.getItem('token');
    const session = this.sessionstorage.getSession(token);
    if (token && session) {
      this.user = session;
      console.log(this.user);
    }
    else {
      this.user = false;
    }
  }

  ngOnInit(): void {
    this.checkUser();
  }
}
