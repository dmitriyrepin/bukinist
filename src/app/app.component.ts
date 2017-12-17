import { Component, OnInit, Input } from '@angular/core';

import { BookDetailsService } from './books/shared/book-details.service';
import { LibraryService } from './books/shared/library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Bukinist';

  constructor(
    private _bookDetailsService: BookDetailsService,
    private _libraryService: LibraryService) {
  }

  ngOnInit() {
  }
}
