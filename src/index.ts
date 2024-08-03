import { Book } from "./Book";
import { catalog } from "./catalog";
import * as readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

const Catalog = new catalog();

export function requestISBN(): void {
    rl.question('ingrese el ISBN del libro: ',(isbn) => {
        rl.question('ingrese la cantidad que desea comprar de este libro: ', (quantity) => {
            const quantityToDeduct = parseInt(quantity, 10);
            if (isNaN(quantityToDeduct) || quantityToDeduct <= 0) {
                console.log('cantidad invalida');
            } else {
                Catalog.updateCatalogBook(isbn, quantityToDeduct);
            }
            rl.close
        })
    })
}


const book1 = new Book ('123','armadura oxidada','armadura',15000,10000,10);
const book2 = new Book ('124','Alquimia','mujer',20000,10000,5);


Catalog.addToCatalog(book1);
Catalog.addBook(book2);
Catalog.PrintCatalog();
Catalog.PrintBooks();
requestISBN();