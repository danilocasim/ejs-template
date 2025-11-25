import {
  getAllBooks as dbAllBooks,
  addBook as dbAddBook,
} from "../dynamodb/queries/BookQueries.js";

export const getAllBooks = async (req, res) => {
  const books = await dbAllBooks();
  console.log(getAllBooks);
  res.render("pages/index", { books: books.Items });
};

export const addBook = async (req, res) => {
  const { title, genre } = req.body;
  const books = await dbAddBook(title, genre);
  res.redirect("/");
};
