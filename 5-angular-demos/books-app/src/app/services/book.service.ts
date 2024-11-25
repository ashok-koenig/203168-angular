import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // private booksList: Book[] = []
  constructor(private http: HttpClient) { }
  addBook(newBook: Book){
    // this.booksList.push(newBook)
  }
  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/books')
    // return this.booksList;
  }

}
