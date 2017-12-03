import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Book } from '../shared/book.model';
import { BookDetailsService } from '../shared/book-details.service';
import { LibraryService } from '../shared/library.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  // @Input() theBook: Book;

  theBook: Book;
  subscription: Subscription;

  constructor(private _libraryService: LibraryService) {
    this.subscription = this._libraryService.getLibrary().selectedBook$.subscribe(
      selection => {
        this.theBook = selection;
        console.log(`New book selected: "${this.theBook.title}"`);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
