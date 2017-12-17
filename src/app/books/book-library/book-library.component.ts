import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Book } from '../shared/book.model';
import { LibraryService } from '../shared/library.service';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.css']
})
export class BookLibraryComponent implements OnInit {
  bookList: Book[];

  selectBook(selection: Book) {
    this._libraryService.getLibrary().selectedBook = selection;
  }

  constructor(private _libraryService: LibraryService) {
    this.bookList = this._libraryService.getLibrary().books;
  }

  ngOnInit() {
  }
}
