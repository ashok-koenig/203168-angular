import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  signup(data: User){
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, data)
  }
  login(data: User){
    return this.http.post<any>(`${this.apiBaseUrl}/login`, data)
                          .pipe(map((response)=>{
                            if(response.token){
                              this.tokenService.setToken(response.token, response.role)
                            }
                            return response;
                          }))
  }
  logout(){
    this.tokenService.removeToken()
  }
}
