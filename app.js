import { LibraryModel} from "./libraryModel.js";
import {LibraryView}  from "./libraryView.js";
import { BookModel } from "./bookModel.js";
import { BookView } from "./bookView.js";
import { LibraryController } from "./libraryController.js";
let libraryModel = new LibraryModel();
let bookModel = new BookModel();
let libraryView = new LibraryView();
let bookView = new BookView();
let controller = new LibraryController(bookModel, libraryModel, bookView, libraryView);

controller.updateView();