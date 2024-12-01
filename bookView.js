class BookView {
    constructor() {
        this.cardContainer = document.querySelector(".container-card");
        this.cardHeader = document.querySelector(".container-card-header");
        this.cardHeaderText = document.querySelector("h3");
        this.cardHeaderCheckBox = document.querySelector(".card-read-checkbox");
        this.cardContent = document.querySelector(".container-card-content");
        this.cardContentAuthor = document.querySelector(".container-card-content>span:nth-of-type(1)");
        this.cardContentPages = document.querySelector(".container-card-content>span:nth-of-type(2)")
        this.cardContentDeleteButton = document.querySelector(".card-delete-button");
    }

    createBookCard(book) {
        const containerCard = document.createElement("div");
        containerCard.classList.add("container-card");

        containerCard.setAttribute("data-book-id", book.bookId);
        const header = this.createCardHeader(book.title);
        const content = this.createCardContent(book.author, book.numberPages);

        containerCard.appendChild(header);
        containerCard.appendChild(content);

        return containerCard;
    }

    createCardHeader(title) {
        const headerContainer = document.createElement("div");
        const headerTitle = document.createElement("h3");
        const contentReadButton = document.createElement("input");

        headerTitle.innerHTML = title;
        contentReadButton.setAttribute("type", "checkbox");
        contentReadButton.addEventListener("change", this.setReadStatus);

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

        //contentDeleteButton.addEventListener("click", deleteCard);

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

    bindSetReadStatus(handler) {
        // const bookToUpdate = event.target.closest(".container-card").getAttribute("data-book-id");
        // if (event.target.checked) {
        //     setRead(bookToUpdate, true);
        // }
        // else {
        //     setRead(bookToUpdate, false);
        // }
    }
}

export {BookView};