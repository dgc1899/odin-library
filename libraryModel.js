import { renderLibrary } from "./libraryView.js";

let myLibrary = [];

function Book(bookId, title, author, numberPages, read) {
    this.bookId = bookId;
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.read = read;
}

function addBook(title, author, pages, read) {
    let bookId = myLibrary.length + 1;
    let book = new Book(bookId, title, author, pages, read);
    myLibrary.push(book);
    renderLibrary(myLibrary);
}

function removeBook(bookId) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].bookId == bookId) {
            myLibrary.splice(i, 1);
            console.log(myLibrary);
        }
    }
}

function setRead(bookId, value) {
    myLibrary.forEach(element => {
        if (element.bookId == bookId) {
            element.read = value;
        }
    });
}

export {};

