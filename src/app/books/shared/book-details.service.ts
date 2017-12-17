import { Injectable } from '@angular/core';

import { Author, Book } from './book.model';
import { LibraryService } from './library.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookDetailsService {

  constructor(private _libraryService: LibraryService) {
  }

  get book(): Book {
    return this._libraryService.getLibrary().selectedBook;
  }

  get book$(): Observable<Book> {
    return this._libraryService.getLibrary().selectedBook$;
  }
}
