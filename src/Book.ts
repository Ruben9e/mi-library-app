export class Book {
    
    public ISBN: string;
    public title: string;
    public img: string;
    public salePrice: number;
    public purchasePrice: number;
    public stock: number;

    constructor ( ISBN:string, title:string, img:string, salePrice:number, purchasePrice:number, stock:number) {
        if (purchasePrice <= 0 ) throw new Error ('el precio de venta debe ser mayor a 0');
        if (stock <= 0 ) throw new Error ('cantidad debe ser mayor a 0')
        this.ISBN = ISBN;
        this.title = title;
        this.img = img;
        this.salePrice = salePrice;
        this.purchasePrice = purchasePrice;
        this.stock=stock;
    }
}




