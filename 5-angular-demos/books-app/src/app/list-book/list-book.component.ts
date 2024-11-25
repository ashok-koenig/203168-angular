import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-book',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.css'
})
export class ListBookComponent {
  books: Book[] = []
  constructor(private bookService: BookService){
    // this.books = bookService.getBooks()
    this.loadBooks()
  }

  loadBooks(){
    this.bookService.getBooks().subscribe((data)=>{
      this.books = data
    })
  }

  handleDelete(book: Book){
    let result = confirm('Are you sure? want to delete the book')
    if(result && book.id){
      this.bookService.deleteBook(book.id).subscribe(()=>{
        this.loadBooks()
      })
    }
  }
}
