import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mywallet-page',
  templateUrl: './mywallet-page.component.html',
  styleUrls: ['./mywallet-page.component.css']
})
export class MywalletPageComponent implements OnInit {
  user: any;
  cards: any;

  constructor(
    private sessionstorage: LocalstorageService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.user = this.sessionstorage.getSession(token);
    this.cards = this.http.get('/assets/cards.js');
  }}
