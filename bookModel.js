class BookModel {
     constructor(bookId, title, author, numberPages, read) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.numberPages = numberPages;
        this.read = read;
    }

     set read(value) {
        this._read = value;
    }
}

export {BookModel};