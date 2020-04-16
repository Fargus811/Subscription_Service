import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-mysubscriptions',
  templateUrl: './mysubscriptions.component.html',
  styleUrls: ['./mysubscriptions.component.css']
})
export class MysubscriptionsComponent implements OnInit {
  user: any;

  constructor(private sessionstorage: LocalstorageService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.user = this.sessionstorage.getSession(token);
  }}
