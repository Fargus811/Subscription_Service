import { Injectable } from '@angular/core';
import { users } from '../assets/users';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private sessions: Map<string, any> = new Map<string, any>();
  constructor() {
    console.log('initialized service');
   }

  generateToken(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  verifyPassword(email: string, password: string){
    const passwordKey = 'password';
    if (email in users && users[email][passwordKey] === password) {
      return true;
    }
    else { return false; }
  }

  authenticate(email: string, password: string) {
    if (this.verifyPassword(email, password)) {
      const token = this.generateToken();
      this.sessions.set(token, users[email]);
      console.log('authenticated');
      console.log(this.sessions);
      return token;
    }
    else {
      return false;
    }
  }

  getSession(token: string) {
    console.log('trying to get session');
    console.log(this.sessions);
    console.log(token);
    if (this.sessions.has(token)) {
      console.log('yep');
      const user = this.sessions.get(token);
      return { displayname: user.displayname, role: user.role };
    }
    else {
      console.log('nope');
      return false;
    }
  }
}
