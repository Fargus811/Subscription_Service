import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-mysubscriptions-page',
  templateUrl: './mysubscriptions-page.component.html',
  styleUrls: ['./mysubscriptions-page.component.css']
})
export class MysubscriptionsPageComponent implements OnInit {
  user: any;

  constructor(private sessionstorage: LocalstorageService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.user = this.sessionstorage.getSession(token);
  }}
