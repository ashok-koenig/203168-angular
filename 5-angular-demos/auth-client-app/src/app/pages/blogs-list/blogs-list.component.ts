import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [],
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
