import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  subscriptions: any;

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.subscriptions = this.http.get('/assets/subscriptions.json');
  }

}
