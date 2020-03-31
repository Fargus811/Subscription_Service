import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  href: string;
  constructor(
    private location: Location
    ) { }

  ngOnInit(): void {
    this.href = this.location.path();
  }

}
