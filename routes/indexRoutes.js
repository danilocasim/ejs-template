import { Router } from "express";
import { getAllBooks, addBook } from "../controller/BookController.js";

const indexRouter = Router();

indexRouter.get("/", getAllBooks);
indexRouter.post("/addBook", addBook);

export { indexRouter };
