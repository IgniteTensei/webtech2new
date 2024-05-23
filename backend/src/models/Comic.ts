export class Comic {
    _id: string;
    title: string;
    author: string;
    publisher: string;
    pages: number;
    type: string; //Manga, Light Novel, Comic
    releaseDate: Date;
    synopsis: string;
    price: number;
    condition: string;  //New, Used
    isbn: number;
    format: string; //Paperback, Hardback
    
    constructor(comic: any) {
        this._id = comic._id;
        this.title = comic.title;
        this.author = comic.author;
        this.publisher = comic.publisher;
        this.pages = comic.pages;
        this.type = comic.type;
        this.releaseDate = comic.releaseDate;
        this.synopsis = comic.synopsis;
        this.price = comic.price;
        this.condition = comic.condition;
        this.isbn = comic.isbn;
        this.format = comic.format;
    }
}