
import { Error } from "./models/Error";
import { Comic } from "./models/Comic";

export class ErrorMsg {

  static comicErrorMsg(comic: Comic): Error[] {
    let errors: Error[] = [];
    console.log(comic);

    if (!comic) {
      errors.push(new Error("comic", "Fill the form please!"));
      return errors;
    }
    if (!comic.title) {
      errors.push(new Error("comic.title", "Title is required!")
      );
    }
    if (!comic.author) {
      errors.push(new Error("book.firstName", "Author name is required!")
      );
    }
    if (!comic.publisher) {
      errors.push(new Error("book.publisher", "Publisher is required!")
      );
    }
    if (!comic.pages) {
      errors.push(new Error("book.pageNumber", "Page number is required!")
      );
    }
    if (!comic.type) {
      errors.push(new Error("book.coverType", "Comic type is required!")
      );
    }
    if (!comic.releaseDate) {
      errors.push(new Error("book.releaseDate", "Release date is required!")
      );
    }
    if (!comic.synopsis) {
      errors.push(new Error("book.description", "Synopsis is required!")
      );
    }
    if (!comic.price) {
      errors.push(new Error("book.amount", "Price is required!")
      );
    }
    if (!comic.condition) {
      errors.push(new Error("book.amount", "Condition is required!")
      );
    }
    if (!comic.isbn) {
      errors.push(new Error("book.amount", "ISBN is required!")
      );
    }
    if (!comic.format) {
      errors.push(new Error("book.amount", "Format is required!")
      );
    }
    return errors;
  }
}