import { Injectable } from '@angular/core';

import { Library } from './library.model';

import { LibraryData } from '../../../data/library-data';

@Injectable()
export class LibraryService {

  private _library: Library;

  constructor() { }

  getLibrary(): Library {
    if (!this._library) {
      this._library = new Library(LibraryData.books);
    }
    return this._library;
  }
}
