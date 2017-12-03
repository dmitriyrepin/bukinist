import { Component, OnInit, Input } from '@angular/core';

import { Author, Book } from './books/shared/book.model';
import { Library } from './books/shared/library.model';

import { BookDetailsService } from './books/shared/book-details.service';
import { BookListService } from './books/shared/book-list.service';
import { LibraryService } from './books/shared/library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Bukinist';
  // selectedBook: Book;
  // bookList: Book[];

  constructor(
    private _bookDetailsService: BookDetailsService,
    private _bookListService: BookListService,
    private _libraryService: LibraryService) {
  }

  ngOnInit() {
    // this.selectedBook = this._bookDetailsService.getBook();
    // this.bookList = this._bookListService.getBookList();
  }

  // onBookSelected(selection: Book) {
  //   this.selectedBook = selection;
  // }
}
