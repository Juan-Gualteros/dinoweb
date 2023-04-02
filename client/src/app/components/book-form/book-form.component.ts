import { Component, HostBinding, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Router} from '@angular/router';

import { BooksService } from '../../services/books.service'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @HostBinding('class') classes= 'row';

  Book: Book = {
    book_id:0,
    title: '',
    year: 1900,
    language: '',
    cover_url: '',
    description:''
  };

  edit: boolean =false;

  constructor(private bookService: BooksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['book_id']){
      this.bookService.getBook(params['book_id'])
        .subscribe(
          res=>{
            console.log(res)
            this.Book = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewBook(){
    delete this.Book.book_id;
    this.bookService.saveBook(this.Book)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/books'])
      },
      err => console.error(err)
    )
  }

  updateBook(){
    this.bookService.updateBook(this.Book.book_id!, this.Book)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/books'])
      },
      err => console.log(err)
    )
  }
  

}
