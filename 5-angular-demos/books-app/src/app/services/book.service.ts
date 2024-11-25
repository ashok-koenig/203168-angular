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
  addBook(newBook: Book): Observable<Book>{
    return this.http.post<Book>('http://localhost:3000/books', newBook)
    // this.booksList.push(newBook)
  }
  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/books')
    // return this.booksList;
  }

  deleteBook(id: number){
    return this.http.delete(`http://localhost:3000/books/${id}`)
  }

}
