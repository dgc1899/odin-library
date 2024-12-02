class BookView {
    constructor() {
        this.containerMainContent = document.querySelector(".grid-main-content");

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
        const header = this.createCardHeader(book.title, book._read);
        const content = this.createCardContent(book.author, book.numberPages);

        containerCard.appendChild(header);
        containerCard.appendChild(content);

        return containerCard;
    }

    createCardHeader(title, read) {
        const headerContainer = document.createElement("div");
        const headerTitle = document.createElement("h3");
        const contentReadButton = document.createElement("input");

        headerTitle.innerHTML = title;
        contentReadButton.setAttribute("type", "checkbox");
        contentReadButton.checked = read;
        contentReadButton.classList.add("card-read-checkbox");

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


    bindSetReadStatus(handler) {
        this.containerMainContent.addEventListener("change", (event) => {
            if (event.target.classList.contains("card-read-checkbox")) {
                const bookToUpdate = event.target.closest(".container-card").getAttribute("data-book-id");
                if (event.target.checked) {
                    handler(bookToUpdate, true);
                }
                else {
                    handler(bookToUpdate, false);
                }
            }
        });

    }

    bindDeleteCard(handler) {
        this.containerMainContent.addEventListener("click", (event) => {
            const deleteButtons = Array.from(document.querySelectorAll(".card-delete-button"));
            deleteButtons.forEach(button => {
                if (event.target.classList.contains("card-delete-button")) {
                    const bookToRemove = event.target.closest(".container-card").getAttribute("data-book-id");
                    handler(bookToRemove);
                }
            });
        })
        
    }   

}

export {BookView};