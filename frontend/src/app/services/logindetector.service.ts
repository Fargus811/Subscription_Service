import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogindetectorService {
  private loginResult = new Subject<string>();

  loginResult$ = this.loginResult.asObservable();

  constructor() { }

  announceLogin(role: string){
    this.loginResult.next(role);
  }
}
