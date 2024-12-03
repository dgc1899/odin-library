import { LibraryView } from "./libraryView.js";

class LibraryModel {
    #myLibrary = [];

    addBook(book) {
        this.#myLibrary.push(book);
    }
    
    removeBook(bookId) {
        for (let i = 0; i < this.#myLibrary.length; i++) {
            if (this.#myLibrary[i].bookId == bookId) {
                this.#myLibrary.splice(i, 1);
            }
        }
    }

    get currentLibrary() {
        return this.#myLibrary;
    }

    get currentLibraryId() {
        return this.#myLibrary.length;
    }

    set currentLibrary(newLibrary) {
        this.#myLibrary = newLibrary;
    }

}

export {LibraryModel};

