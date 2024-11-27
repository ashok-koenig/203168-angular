import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';
import {MatCardModule} from '@angular/material/card'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.css'
})
export class BlogsListComponent {
  blogs: Blog[] = []
  constructor(private blogService: BlogService){
    this.loadAllBlogs()
  }
  loadAllBlogs(){
    this.blogService.getBlogs().subscribe((data)=>{
      this.blogs = data;
    })
  }
}
