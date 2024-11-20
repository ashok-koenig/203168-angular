import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksList: Book[] = []
  constructor() { }
  addBook(newBook: Book){
    this.booksList.push(newBook)
  }
  getBooks(){
    return this.booksList;
  }

}
