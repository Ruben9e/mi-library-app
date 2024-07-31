import { Book } from "./book";

export class catalog {
    private catalog: Book[] = [];
    private books: Book[] = [];

    public addToCatalog(book: Book): Book {
        this.catalog.push(book);
        return book;
    }

    public addBook (book: Book): Book {
        this.books.push(book)
        return book;
    }

    public PrintCatalog ():void {
        console.log('catalogo');
        this.catalog.forEach(book => {
            console.log(`ISBN:${book.ISBN}, titulo:${book.title}, precio:${book.salePrice}`)
        })
    }

    public PrintBooks ():void {
        console.log('libros');
        this.books.forEach(book => {
            console.log(`ISBN:${book.ISBN}, titulo:${book.title}, precio:${book.salePrice}, precio de compra:${book.purchasePrice}`)
        })
    }
}


