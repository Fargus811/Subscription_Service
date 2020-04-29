import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogComponent implements OnInit {
  subscriptions: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.subscriptions = this.http.get('/assets/subscriptions.json');

  }

  subscribeToService(buttonId: string) {
    const button = document.getElementById(buttonId);
    button.setAttribute('style', 'color: green; border-color: green');
    button.innerHTML = '<img src="assets/done.svg"> Subscribed';
    window.alert('Subscribed to ' + buttonId);
  }

}
