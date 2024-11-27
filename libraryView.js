import {addBook, removeBook, setRead, myLibrary} from "./libraryModel.js"; 

class LibraryView {
    constructor() {
        const containerMainContent = document.querySelector(".grid-main-content");
        const btnAddBook = document.querySelector(".btn-add-book");
        
        const addBookModal = document.querySelector(".add-book-dialog");
        const addBookModalInputs = document.querySelectorAll(".add-book-dialog form>div>input");
        const addBookModalSubmit = document.querySelector(".add-book-dialog input[type='submit']");
        const addBookModalClose = document.querySelector(".add-book-dialog button");
        const deleteCardButton = document.querySelector(".card-delete-button");
        
    }


    showModal() {
        btnAddBook.addEventListener("click", () => {
        addBookModal.showModal();
        });
    }

    closeModal(event) {
        addBookModalClose.addEventListener("click", () => {
            event.preventDefault();
            addBookModal.close();
        });
    }

    addBookCard() {
    addBookModalSubmit.addEventListener("click", event => {
        let bookDetails = [];

        event.preventDefault();

        for (const element of addBookModalInputs) {
            bookDetails.push(element.value);
        }
        bookDetails.push(false);
        addBook(bookDetails[0], bookDetails[1], bookDetails[2], bookDetails[3]);
        addBookModal.close();
    });  
    }


    renderLibrary(library) {
        deleteCards();
        library.forEach(book => {
            createCard(book);
        });
    }


    deleteCards() {
        // const contentCards = Array.from(document.querySelectorAll(".container-card"));
        // contentCards.forEach(element => {
        //     element.remove();
        // });
        containerMainContent.innerHTML = "";
    }
}

export {LibraryView};