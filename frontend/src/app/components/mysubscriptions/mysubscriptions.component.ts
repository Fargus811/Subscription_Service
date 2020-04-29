import {Component, OnInit} from '@angular/core';
import {LocalstorageService} from '../../services/localstorage.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mysubscriptions',
  templateUrl: './mysubscriptions.component.html',
  styleUrls: ['./mysubscriptions.component.css']
})
export class MysubscriptionsComponent implements OnInit {
  user: any;
  subscriptions: any;

  constructor(
    private sessionstorage: LocalstorageService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.subscriptions = this.http.get('/assets/subscriptions.json');
    const token = localStorage.getItem('token');
    this.user = this.sessionstorage.getSession(token);
  }
}
