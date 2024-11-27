class BookView {
    constructor() {
        const cardContainer = document.querySelector(".container-card");

        const cardHeader = document.querySelector(".container-card-header");
        const cardHeaderText = document.querySelector("h3");
        const cardHeaderCheckBox = document.querySelector(".card-read-checkbox");

        const cardContent = document.querySelector(".container-card-content");
        const cardContentAuthor = document.querySelector(".container-card-content>span:nth-of-type(1)");
        const cardContentPages = document.querySelector(".container-card-content>span:nth-of-type(2)")
        const cardContentDeleteButton = document.querySelector(".card-delete-button");
    }

    createCard(book) {
        const containerCard = document.createElement("div");
        containerCard.classList.add("container-card");

        containerCard.setAttribute("data-book-id", book.bookId);
        const header = createCardHeader(book.title);
        const content = createCardContent(book.author, book.numberPages);

        containerCard.appendChild(header);
        containerCard.appendChild(content);
        containerMainContent.appendChild(containerCard);
    }

    createCardHeader(title) {
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

    createCardContent(author, pages) {
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

    deleteCard(event) {
        const bookToRemove = event.target.closest(".container-card").getAttribute("data-book-id");
        removeBook(bookToRemove);
        event.target.closest(".container-card").remove();
    }   

    setReadStatus(event) {
        const bookToUpdate = event.target.closest(".container-card").getAttribute("data-book-id");
        if (event.target.checked) {
            setRead(bookToUpdate, true);
        }
        else {
            setRead(bookToUpdate, false);
        }
    }
}