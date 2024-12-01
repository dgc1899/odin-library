import {LibraryModel} from "./libraryModel.js"; 
import { BookView } from "./bookView.js";

class LibraryView {
    constructor() {
        this.containerMainContent = document.querySelector(".grid-main-content");
        this.btnAddBook = document.querySelector(".btn-add-book");
        this.addBookModal = document.querySelector(".add-book-dialog");
        this.addBookModalInputs = document.querySelectorAll(".add-book-dialog form>div>input");
        this.addBookModalSubmit = document.querySelector(".add-book-dialog input[type='submit']");
        this.addBookModalClose = document.querySelector(".add-book-dialog button");
        
        this.btnAddBook.addEventListener("click", () => this.appearModal());
        this.addBookModalClose.addEventListener("click", () => this.closeModal());
        
    }

    appearModal() {
        this.addBookModal.showModal();
    }

    closeModal(event) {
        event.preventDefault();
        this.addBookModal.close();
    }

    bindAddBookCard(handler) {
        this.addBookModalSubmit.addEventListener("click",(event) => {
            let bookDetails = [];

            event.preventDefault();
    
            for (const element of this.addBookModalInputs) {
                bookDetails.push(element.value);
            }
            bookDetails.push(false);
            handler(bookDetails[0], bookDetails[1], bookDetails[2], bookDetails[3]);
            //addBook();
            this.addBookModal.close();
        }); 
    }


    renderLibrary(library) {
        this.containerMainContent.innerHTML = '';
        library.forEach(book => {
            const bookView = new BookView();
            const bookCard = bookView.createBookCard(book);
            this.containerMainContent.appendChild(bookCard);
        });
    }


    deleteCards() {
        // const contentCards = Array.from(document.querySelectorAll(".container-card"));
        // contentCards.forEach(element => {
        //     element.remove();
        // });
        this.containerMainContent.innerHTML = "";
    }
}

export {LibraryView};