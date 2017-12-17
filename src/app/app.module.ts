import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AllMaterialComponentsModule } from './shared/all-material-components.module';

import { AppComponent } from './app.component';
import { BookComponent } from './books/book/book.component';
import { BookDetailsService } from './books/shared/book-details.service';
import { BookLibraryComponent } from './books/book-library/book-library.component';

import { LibraryService } from './books/shared/library.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookLibraryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AllMaterialComponentsModule, // import after BrowserModule
  ],
  providers: [BookDetailsService, LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
