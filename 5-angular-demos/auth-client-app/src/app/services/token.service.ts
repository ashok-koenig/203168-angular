import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isLoggedIn = new BehaviorSubject<boolean>(false)
  userRole = new BehaviorSubject<string>('')
  constructor() {
    if(this.getToken()){
      this.updateStatus(true);
      this.updateRole(this.getRole())
    }
   }
  updateStatus(status: boolean){
    this.isLoggedIn.next(status)
  }
  updateRole(role: string){
    this.userRole.next(role)
  }
  setToken(token: string, role: string){
    localStorage.setItem('login-token', token)
    localStorage.setItem('user-role', role)
    this.updateStatus(true)
    this.updateRole(role)
  }
  getToken(){
    return localStorage.getItem('login-token') || ''
  }
  getRole(){
    return localStorage.getItem('user-role') || ''
  }
  removeToken(){
    localStorage.removeItem('login-token');
    localStorage.removeItem('user-role')
    this.updateStatus(false)
    this.updateRole('')
  }
}
