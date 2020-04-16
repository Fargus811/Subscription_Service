import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  user: any;
  currentPath: string;
  activeProfile: string;
  activeSubscriptions: string;
  activeWallet: string;

  constructor(
    private sessionstorage: LocalstorageService,
    private location: Location,
    private router: Router) {
      this.router.events.subscribe(
        () => this.changeLocation());
     }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.user = this.sessionstorage.getSession(token);
    this.getActives();
  }

  changeLocation() {
    this.currentPath = this.location.path();
    this.getActives();
  }

  getActives() {
    this.activeProfile = this.currentPath === '/personal/profile' ? 'active' : '';
    this.activeSubscriptions = this.currentPath === '/personal/mysubscriptions' ? 'active' : '';
    this.activeWallet = this.currentPath === '/personal/mywallet' ? 'active' : '';
  }
}
