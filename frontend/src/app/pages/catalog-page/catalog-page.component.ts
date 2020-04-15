import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogComponent implements OnInit {
  subscriptions: any;

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.subscriptions = this.http.get('/assets/subscriptions.json');

  }

}
