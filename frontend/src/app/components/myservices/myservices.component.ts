import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css']
})
export class MyservicesComponent implements OnInit {
  user: any;
  services: any;

  constructor(
    private sessionstorage: LocalstorageService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.user = this.sessionstorage.getSession(token);
    this.services = this.http.get('/assets/subscriptions.json');
    console.log(this.services);

  }
  openModal(){
    document.querySelector('.modal').classList.add('open');
  }
  closeModal(){
    document.querySelector('.modal').classList.remove('open');
  }

}
