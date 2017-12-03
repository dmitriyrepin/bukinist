// import * as FileSystem from 'fs';
// import { Injectable } from '@angular/core';

// import { Author, Book } from '../books/shared/book.model';
// import { Th } from '../utils/th';

// @Injectable()
// export class BukinistService {

//     private filePath = './assets/books.json';
//     private books: Book[];

//     constructor() {
//         this.books = new Array<Book>();
//         this.books.push(new Book());
//     }

//     getBooks(): Book[] {
//         return this.books;
//     }

//     async loadBooks(): Promise<Book[]> {
//         const p = new Promise<Book[]>(function (resolve: (value: Book[]) => void, reject: (reason: Error) => void) {
//             FileSystem.readFile(
//                 this.filePath, { encoding: 'utf8' },
//                 (err: NodeJS.ErrnoException, data: string) => {
//                     if (err) { reject(err); }

//                     const books: Book[] = JSON.parse(data);
//                     console.log(`Loaded ${books.length} books`);
//                     resolve(books);
//                 });
//         });
//         await Th.sleep(5000);
//         return p;
//     }
// }
