import {addBook, removeBook, setRead, myLibrary} from "./libraryModel.js"; 

const containerMainContent = document.querySelector(".grid-main-content");
const btnAddBook = document.querySelector(".btn-add-book");

const addBookModal = document.querySelector(".add-book-dialog");
const addBookModalInputs = document.querySelectorAll(".add-book-dialog form>div>input");
const addBookModalSubmit = document.querySelector(".add-book-dialog input[type='submit']");
const addBookModalClose = document.querySelector(".add-book-dialog button");
const deleteCardButton = document.querySelector(".card-delete-button");


btnAddBook.addEventListener("click", showModal);
addBookModalSubmit.addEventListener("click", addBookCard);
addBookModalClose.addEventListener("click", closeModal);

function showModal() {
    addBookModal.showModal();
}

function closeModal(event) {
    event.preventDefault();
    addBookModal.close();
}

function addBookCard(event) {
    let bookDetails = [];

    event.preventDefault();

    for (const element of addBookModalInputs) {
        bookDetails.push(element.value);
    }
    bookDetails.push(false);
    addBook(bookDetails[0], bookDetails[1], bookDetails[2], bookDetails[3]);
    addBookModal.close();
}


function renderLibrary(library) {
    deleteCards();
    library.forEach(book => {
        createCard(book);
    });
}

function createCard(book) {
    const containerCard = document.createElement("div");
    containerCard.classList.add("container-card");

    containerCard.setAttribute("data-book-id", book.bookId);
    const header = createCardHeader(book.title);
    const content = createCardContent(book.author, book.numberPages);

    containerCard.appendChild(header);
    containerCard.appendChild(content);
    containerMainContent.appendChild(containerCard);
}

function createCardHeader(title) {
    const headerContainer = document.createElement("div");
    const headerTitle = document.createElement("h3");
    const contentReadButton = document.createElement("input");

    headerTitle.innerHTML = title;
    contentReadButton.setAttribute("type", "checkbox");
    contentReadButton.addEventListener("change", setReadStatus);

    headerContainer.classList.add("container-card-header");
    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(contentReadButton);

    return headerContainer;
}

function createCardContent(author, pages) {
    const contentContainer = document.createElement("div");
    const contentAuthor = document.createElement("span");
    const contentPages = document.createElement("span");
    const contentDeleteButton = document.createElement("button");

    contentAuthor.innerHTML = author;
    contentPages.innerHTML = pages;
    contentDeleteButton.innerHTML = "Delete";

    contentContainer.classList.add("container-card-content");
    contentDeleteButton.classList.add("card-delete-button");

    contentDeleteButton.addEventListener("click", deleteCard);

    contentContainer.appendChild(contentAuthor);
    contentContainer.appendChild(contentPages);
    contentContainer.appendChild(contentDeleteButton);

    return contentContainer;

}

function deleteCard(event) {
    const bookToRemove = event.target.closest(".container-card").getAttribute("data-book-id");
    removeBook(bookToRemove);
    event.target.closest(".container-card").remove();
}

function deleteCards() {
    const contentCards = Array.from(document.querySelectorAll(".container-card"));
    contentCards.forEach(element => {
        element.remove();
    });
}

function setReadStatus(event) {
    const bookToUpdate = event.target.closest(".container-card").getAttribute("data-book-id");
    if (event.target.checked) {
        setRead(bookToUpdate, true);
    }
    else {
        setRead(bookToUpdate, false);
    }
}

export {renderLibrary, addBookCard};