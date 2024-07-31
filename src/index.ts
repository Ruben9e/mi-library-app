import { Book } from "./book";
import { catalog } from "./catalog";

const book1 = new Book ('123','armadura oxidada','armadura',15000,10000,10);
const book2 = new Book ('124','Alquimia','mujer',20000,10000,5);

const Catalog = new catalog();

Catalog.addToCatalog(book1);
Catalog.addBook(book2);
Catalog.PrintCatalog();
Catalog.PrintBooks();