import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

import { Author, Book } from '../shared/book.model';

export class Library {

  books: Book[];

  private _selectedBookSubject = new BehaviorSubject<Book>(undefined);

  get selectedBook$(): Observable<Book> {
    return this._selectedBookSubject.asObservable();
  }

  set selectedBook(value: Book) {
    this._selectedBookSubject.next(value);
  }

  constructor(json: any) {
    this.books = Book.toBookArray(json);
    console.log(`Loaded ${this.books.length} books`);
    if (this.books.length > 0) {
      this.selectedBook = this.books[0];
    }
  }
}
