import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiBaseUrl = "http://localhost:3000/blogs"
  constructor(private http: HttpClient) { }
  getBlogs():Observable<Blog[]>{
    return this.http.get<any>(this.apiBaseUrl)
  }
}
