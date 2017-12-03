export class Author {
  constructor(
    public name: string = 'Unknown',
    public surname: string = 'Unnamed') {
  }

  static fromString(sname: string): Author {
    const w = sname.split(' ');
    const lastName = w[w.length - 1];
    return new Author(sname.substring(0, sname.length - lastName.length - 1), lastName);
  }

  static fromStringArray(authors: string[]) {
    const a = new Array<Author>();
    for (const s of authors) {
      a.push(Author.fromString(s));
    }
    return a;
  }
}

export class Book {
  /* tslint:disable:no-inferrable-types */
  edition?: number = undefined;
  pages?: number = undefined;
  publisher?: string = undefined;
  date?: Date = undefined;
  isbn10?: string = undefined;
  isbn13?: string = undefined;
  subject?: string[];
  /* tslint:enable:no-inferrable-types */
  constructor(
    public title: string = 'Unknown',
    public authors: Author[] = [new Author()]) {
  }

  static fromJson(json: {
    Title: string,
    Edition: number,
    Authors: string[],
    Pages: number,
    Publisher: string,
    Date: string,
    ISBN_10: string,
    ISBN_13: string,
    Subject: string[]
  }): Book {
    const book = new Book(json.Title, Author.fromStringArray(json.Authors));
    book.edition = json.Edition;
    book.pages = json.Pages;
    book.publisher = json.Publisher;
    book.date = new Date(json.Date);
    book.isbn10 = json.ISBN_10;
    book.isbn13 = json.ISBN_13;
    book.subject = json.Subject;

    return book;
  }

  static toBookArray(json: any): Book[] {
    const a = new Array<Book>();
    for (const bookJson of json.books) {
      a.push(Book.fromJson(bookJson));
    }
    return a;
  }
}
