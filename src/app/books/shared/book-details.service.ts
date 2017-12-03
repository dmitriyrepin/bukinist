import { Injectable } from '@angular/core';

import { Author, Book } from '../shared/book.model';

@Injectable()
export class BookDetailsService {

  book: Book;

  constructor() {
    this.book = new Book('Learning Python', [new Author('Mark', 'Lutz'), new Author('Other', 'Fellow'), new Author('Unknown', 'Guy')]);
    this.book.edition = 5;
    this.book.pages = 1648;
    /* tslint:disable:quotemark */
    this.book.publisher = "O'Reilly Media";
    /* tslint:enable:quotemark */
    this.book.date = new Date('July 6, 2013');
    this.book.isbn10 = '1449355730';
    this.book.isbn13 = '978-1449355739';
    this.book.subject = ['Python', 'learning'];
  }

  getBook(): Book {
    return this.book;
  }

}
