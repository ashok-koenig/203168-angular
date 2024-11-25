import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
  newBook: Book = {title: '', author: ''}
  successMessage: string =''
  errorMessage: string =''
  id: number = 0
  constructor(private bookService: BookService, private route: ActivatedRoute){    
    this.id = route.snapshot.params['id']
    this.bookService.getABook(this.id).subscribe(data=>{
      this.newBook.id = data.id;
      this.newBook.title = data.title;
      this.newBook.author = data.author
    })
  }
  handleSubmit(){
    this.bookService.updateBook({...this.newBook}).subscribe({
      next: (data: Book)=>{
      if(data.id){
        this.newBook.title='';
        this.newBook.author= ''
        this.successMessage = "Books updated successfully"
      }else{
        this.errorMessage = "Error in updating new Book"
      }
    },
    error: (error)=>{
      this.errorMessage = "Something went wrong, please try again"
    }
  })
  }
}
