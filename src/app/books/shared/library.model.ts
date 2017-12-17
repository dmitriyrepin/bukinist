import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Author, Book } from '../shared/book.model';

export class Library {

  books: Book[];

  private _selectedBook: Book;
  private _selectedBookSubject = new BehaviorSubject<Book>(undefined);

  constructor(json: any) {
    this.books = Book.toBookArray(json);
    console.log(`Loaded ${this.books.length} books`);
    if (this.books.length > 0) {
      this.selectedBook = this.books[0];
    }

    this._selectedBookSubject.subscribe(
      selection => {
        this._selectedBook = selection;
        console.log(`BookDetailsService - new book selected: "${this._selectedBook.title}"`);
      });
  }

  get selectedBook$(): Observable<Book> {
    return this._selectedBookSubject as Observable<Book>;
  }

  get selectedBook(): Book {
    return this._selectedBook;
  }

  set selectedBook(value: Book) {
    this._selectedBookSubject.next(value);
  }
}
