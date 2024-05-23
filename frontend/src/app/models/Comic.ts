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
    isbn: string;
    format: string; //Paperback, Hardback
}