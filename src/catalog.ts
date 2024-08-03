import { Book } from "./Book";
import { requestISBN } from ".";
export class catalog {
    public catalogBook: Book[] = [];
    public books: Book[] = [];

    public addToCatalog(book: Book): Book {
        this.catalogBook.push(book);
        return book;
    }

    public addBook(book: Book): Book {
        this.books.push(book)
        return book;
    }

    public PrintCatalog(): void {
        console.log('catalogo');
        this.catalogBook.forEach(book => {
            console.log(`ISBN: ${book.ISBN}, titulo: ${book.title}, precio: ${book.salePrice}, cantidad: ${book.stock}`)
        })
    }

    public PrintBooks(): void {
        console.log('libros');
        this.books.forEach(book => {
            console.log(`ISBN: ${book.ISBN}, titulo: ${book.title}, precio: ${book.salePrice}, precio de compra: ${book.purchasePrice}`)
        })
    }

    public updateCatalogBook(isbn: string, quantityToDeduct: number): void {
        const updateBook = this.catalogBook.find(b => b.ISBN === isbn);

        if (updateBook) {
            if (updateBook.stock >= quantityToDeduct) {
                updateBook.stock -= quantityToDeduct;
                console.log(`realizo la compra de ${quantityToDeduct} del libro con isbn ${isbn}`);
                this.catalogBook.forEach(book => {
                    console.log(`titulado: ${book.title}`);
                    let ventas:number = book.salePrice * quantityToDeduct;
                    console.log('por el valor de: ' + ventas);
                    let baseCaja:number = 1000000
                    baseCaja += ventas                   
                    console.log('dinero en caja :' + baseCaja);
                })
            } else {
                console.log('no tenemos suficiente cantidad en stock de este libro porfavor intente denuevo');
            }
        } else {
            console.log(`libro con el ISBN ${isbn} no encontrado`);
        }
    }
}





