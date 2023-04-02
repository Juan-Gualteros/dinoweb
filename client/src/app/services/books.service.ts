import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Book}  from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }


  getBooks(){
    return this.http.get(`${this.API_URI}/books`);
  }

  getBook(book_id: string) {
    return this.http.get(`${this.API_URI}/books/${book_id}`);
  }

  deleteBook(book_id: string){
    return this.http.delete(`${this.API_URI}/books/${book_id}`);
  }

  updateBook(book_id: string|number, updatedBook: Book): Observable<Book>{
    return this.http.put(`${this.API_URI}/books/${book_id}`, updatedBook);
  }

  saveBook(book: Book){
    return this.http.post(`${this.API_URI}/books`, book);
  }
 
}
