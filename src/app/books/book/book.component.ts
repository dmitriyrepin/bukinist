import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Book } from '../shared/book.model';
import { BookDetailsService } from '../shared/book-details.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  constructor(private _bookDetailsService: BookDetailsService) {
  }

  get theBook$(): Observable<Book> {
    return this._bookDetailsService.book$;
  }

  get theBook(): Book {
    return this._bookDetailsService.book;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
