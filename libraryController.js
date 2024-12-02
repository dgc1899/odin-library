import { LibraryModel } from "./libraryModel.js";
import {BookModel} from "./bookModel.js";

class LibraryController {
    constructor(bookModel, libraryModel, bookView, libraryView) {
        this.bookModel = bookModel;
        this.libraryModel = libraryModel;
        this.bookView = bookView;
        this.libraryView = libraryView;

        this.libraryView.bindAddBookCard(this.createNewBook.bind(this));
    }

    createNewBook(title, author, numberPages, read) {
        const book = new BookModel(this.libraryModel.currentLibraryId, title, author, numberPages, read);
        const bookCard = this.bookView.createBookCard(book);

        this.libraryModel.addBook(book);
        this.updateView();
        this.bookView.bindSetReadStatus(this.setBookReadStatus.bind(this));
        this.bookView.bindDeleteCard(this.deleteBook.bind(this));
    }

    setBookReadStatus(bookId, value) {
        const currentLibrary = this.libraryModel.currentLibrary;
        currentLibrary[bookId].read = value;
        this.libraryModel.currentLibrary = currentLibrary;
        this.updateView();
    }

    deleteBook(bookId) {
        this.libraryModel.removeBook(bookId);
        this.updateView();
    }

    updateView() {
        this.libraryView.renderLibrary(this.libraryModel.currentLibrary);
    }
}

export {LibraryController};