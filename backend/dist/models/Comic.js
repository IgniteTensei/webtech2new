"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comic = void 0;
var Comic = /** @class */ (function () {
    function Comic(comic) {
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
    return Comic;
}());
exports.Comic = Comic;
