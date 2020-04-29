import {Component, OnInit} from '@angular/core';
import {users} from '../../../assets/users';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  users: any;

  constructor() {
  }

  ngOnInit(): void {
    this.users = [];
    for (let key in users) {
      this.users.push(users[key]);
    }
  }
}
