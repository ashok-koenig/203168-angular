import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  newBook: Book = {title: '', author: ''}
  successMessage: string =''
  errorMessage: string =''
  constructor(private bookService: BookService){    
  }
  handleSubmit(){
    this.bookService.addBook({...this.newBook}).subscribe({
      next: (data: Book)=>{
      if(data.id){
        this.newBook.title='';
        this.newBook.author= ''
        this.successMessage = "Books created successfully"
      }else{
        this.errorMessage = "Error in creating new Book"
      }
    },
    error: (error)=>{
      this.errorMessage = "Something went wrong, please try again"
    }
  })
  }
}
