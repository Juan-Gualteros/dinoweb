import { Component, HostBinding, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';


import { BooksService} from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @HostBinding('class') classes ='row';

  books: any = [];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getBooks()
  }

  getBooks(){
    this.booksService.getBooks().subscribe(
      res => {
        this.books = res;
      },
      err => console.log(err)
    );
  }

  deleteBook(id: string){
    this.booksService.deleteBook(id).subscribe(
      res=>{
        console.log(res)
        this.getBooks()
      },
      err =>console.log(err)
    )
  }


}
