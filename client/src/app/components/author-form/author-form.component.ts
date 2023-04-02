import { Component, HostBinding, OnInit } from '@angular/core';
import { authors } from 'src/app/models/author';
import { ActivatedRoute, Router} from '@angular/router';

import { AuthorService } from '../../services/authors.service'

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  @HostBinding('class') classes= 'row';

  author: authors = {
    author_id:0,
    name: '',
    nationality: '',

  };

  
  authors: Object | undefined;

  constructor(private AuthorService: AuthorService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['author_id']){
      this.AuthorService.getAuthor(params['author_id'])
        .subscribe(
          res=>{
            this.authors = res;
            console.log(res)
           
          },
          err => console.error(err)
        )
    }
  }


  updateAuthor(){
    this.AuthorService.updateAuthor(this.author.author_id, this.author)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/authors'])
      },
      err => console.log(err)
    )
  }
  

}
