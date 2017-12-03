import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Book } from '../shared/book.model';
import { BookListService } from '../shared/book-list.service';
import { LibraryService } from '../shared/library.service';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.css']
})
export class BookLibraryComponent implements OnInit {
  // @Input() bookList: Book[];
  // @Output() bookSelected = new EventEmitter<Book>();
  // selectedBook: Book = undefined;
  bookList: Book[];

  selectBook(selection: Book) {
    // this.bookSelected.emit(selection);
    // this.selectedBook = selection;
    this._libraryService.getLibrary().selectedBook = selection;
  }

  constructor(private _libraryService: LibraryService) {
    this.bookList = this._libraryService.getLibrary().books;
  }

  ngOnInit() {
  }
}
