// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.loggedIn.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }
}
