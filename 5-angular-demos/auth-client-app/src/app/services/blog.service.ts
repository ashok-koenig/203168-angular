import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiBaseUrl = "http://localhost:3000/blogs"
  token = ''
  constructor(private http: HttpClient, private tokenService: TokenService) { 
    this.token = tokenService.getToken()
  }
  getBlogs():Observable<Blog[]>{
    return this.http.get<any>(this.apiBaseUrl)
  }
  createBlog(data: Blog){
    const headers = new HttpHeaders({
      'authorization': 'Bearer '+ this.token
    })
    return this.http.post<any>(this.apiBaseUrl, data, {headers})
  }
}
