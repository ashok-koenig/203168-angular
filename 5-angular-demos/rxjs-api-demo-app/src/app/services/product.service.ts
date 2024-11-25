import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<any>("https://dummyjson.com/products")
                    .pipe(
                      map(data=> data['products']),
                      retry(3),
                      catchError(this.hanldeError)
                    )
  }

  private hanldeError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent) { // Client side error
    console.error('Client-side error: ', error.error.message)
    }else{ // Server-side error
      console.log('Server-side Error:', error.status, error.error)
    }
    return throwError(()=> new Error('Something went wrong, Please try again later'))
    }
}
