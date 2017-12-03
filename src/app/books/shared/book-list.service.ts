import { Injectable } from '@angular/core';
// import * as fs from 'fs';
import * as debug from 'debug';
import { BookListData } from './book-list-data';

import { Author, Book } from '../shared/book.model';

@Injectable()
export class BookListService {

  books: Book[];
  logger: debug.IDebugger = debug('bukinist:book-list');

  constructor() { }

  static parse(json: any): Book[] {
    const a = new Array<Book>();
    for (const bookJson of json.books) {
      a.push(Book.fromJson(bookJson));
    }
    return a;
  }

  getBookList(): Book[] {
    if (!this.books) {
      this.books = BookListService.parse(BookListData.books);
      console.log(`Loaded ${this.books.length} books`);
      // this.logger(`Loaded ${this.books.length} books`);
    }
    return this.books;
  }

}
