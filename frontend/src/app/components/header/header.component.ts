import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {LocalstorageService} from '../../services/localstorage.service';
import {LogindetectorService} from '../../services/logindetector.service';

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
      () => this.changeLocation());

    this.loginDetector.loginResult$.subscribe(
      () => this.checkUser());

  }

  changeLocation() {
    this.currentPath = this.location.path();
  }

  checkUser() {
    const token = localStorage.getItem('token');
    const session = this.sessionstorage.getSession(token);
    if (token && session) {
      this.user = session;
      console.log(this.user);
    } else {
      this.user = false;
    }
  }

  ngOnInit(): void {
    this.checkUser();
  }
}
