import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import { HttpClient } from '@angular/common/http';
import { cards } from './cards';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.component.html',
  styleUrls: ['./mywallet.component.css']
})
export class MywalletComponent implements OnInit {
  user: any;
  cards: any;

  constructor(
    private sessionstorage: LocalstorageService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.user = this.sessionstorage.getSession(token);
    this.cards = cards;
  }
  openModal(){
    document.querySelector('.modal').classList.add('open');
  }
  closeModal(){
    document.querySelector('.modal').classList.remove('open');
  }
}
