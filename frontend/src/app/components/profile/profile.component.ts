import {Component, OnInit} from '@angular/core';
import {LocalstorageService} from '../../services/localstorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private sessionstorage: LocalstorageService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.user = this.sessionstorage.getSession(token);
  }

}
