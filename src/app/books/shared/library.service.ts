import { Injectable } from '@angular/core';

import { Author, Book } from '../shared/book.model';
import { Library } from './library.model';

import { BookListData } from './book-list-data';

@Injectable()
export class LibraryService {

  private _library: Library;

  constructor() { }

  getLibrary(): Library {
    if (!this._library) {
      this._library = new Library(BookListData.books);
    }
    return this._library;
  }
}
