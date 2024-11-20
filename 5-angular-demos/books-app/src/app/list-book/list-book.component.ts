import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.css'
})
export class ListBookComponent {
  books: Book[] = []
  constructor(private bookService: BookService){
    this.books = bookService.getBooks()
  }
}
