import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FlexLayoutModule, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
  blogForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  })
  error: string =''
  constructor(private blogService: BlogService, private router: Router){}
  handleSubmit(){
    this.error = ''
    const title = this.blogForm.value.title
    const content = this.blogForm.value.content
    if(title && content){
      this.blogService.createBlog({title, content}).subscribe({
        next:(response)=>{
          if(response){
            this.router.navigate(['/blogs'])
          }
        },
        error: (error)=>{
          this.error = error;
        }
      })
    }
  }
}
