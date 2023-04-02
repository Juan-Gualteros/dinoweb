import { Component, HostBinding, OnInit } from '@angular/core';
import { authors } from 'src/app/models/author';

import { AuthorService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  @HostBinding('class') classes ='row';

  authors: any = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors()
  }

  getAuthors(){
    this.authorService.getAuthors().subscribe(
      res => {
        this.authors = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  deleteAuthor(id: string){
    this.authorService.deleteAuthor(id).subscribe(
      res=>{
        console.log(res)
        this.getAuthors()
      },
      err =>console.log(err)
    )
  }



}
