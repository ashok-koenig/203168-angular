import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  newBook: Book = {title: '', author: ''}
  constructor(private bookService: BookService){    
  }
  handleSubmit(){
    this.bookService.addBook({...this.newBook})
  }
}
