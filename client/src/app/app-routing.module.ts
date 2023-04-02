import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent} from './components/book-list/book-list.component';
import { BookFormComponent} from './components/book-form/book-form.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { Page404Component} from './components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
  path: 'books/add',
  component: BookFormComponent
  },

  {path: 'books/update/:book_id',
  component: BookFormComponent
  },
  {
    path: 'authors',
    component: AuthorListComponent
  },
  {
    path: 'authors/update/:author_id',
    component: AuthorFormComponent
  },
  {
    path: '**',
    component: Page404Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
