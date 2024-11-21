import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false
  userRole: string = ''
  constructor() { }
  login(role: string){
    this.userRole = role;
    this.isLoggedIn = true;
  }
  logout(){
    this.userRole = '';
    this.isLoggedIn = false
  }
}
