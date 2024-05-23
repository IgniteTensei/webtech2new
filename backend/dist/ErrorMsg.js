"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMsg = void 0;
var Error_1 = require("./models/Error");
var ErrorMsg = /** @class */ (function () {
    function ErrorMsg() {
    }
    ErrorMsg.comicErrorMsg = function (comic) {
        var errors = [];
        console.log(comic);
        if (!comic) {
            errors.push(new Error_1.Error("comic", "Fill the form please!"));
            return errors;
        }
        if (!comic.title) {
            errors.push(new Error_1.Error("comic.title", "Title is required!"));
        }
        if (!comic.author) {
            errors.push(new Error_1.Error("book.firstName", "Author name is required!"));
        }
        if (!comic.publisher) {
            errors.push(new Error_1.Error("book.publisher", "Publisher is required!"));
        }
        if (!comic.pages) {
            errors.push(new Error_1.Error("book.pageNumber", "Page number is required!"));
        }
        if (!comic.type) {
            errors.push(new Error_1.Error("book.coverType", "Comic type is required!"));
        }
        if (!comic.releaseDate) {
            errors.push(new Error_1.Error("book.releaseDate", "Release date is required!"));
        }
        if (!comic.synopsis) {
            errors.push(new Error_1.Error("book.description", "Synopsis is required!"));
        }
        if (!comic.price) {
            errors.push(new Error_1.Error("book.amount", "Price is required!"));
        }
        if (!comic.condition) {
            errors.push(new Error_1.Error("book.amount", "Condition is required!"));
        }
        if (!comic.isbn) {
            errors.push(new Error_1.Error("book.amount", "ISBN is required!"));
        }
        if (!comic.format) {
            errors.push(new Error_1.Error("book.amount", "Format is required!"));
        }
        return errors;
    };
    return ErrorMsg;
}());
exports.ErrorMsg = ErrorMsg;
