import path, { dirname } from "path";
import { fileURLToPath } from "url";

import express from "express";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

import { indexRouter } from "./routes/indexRoutes.js";

app.use("/", indexRouter);

const PORT = 9000;
app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`The server is listening at http://localhost:${PORT}/`);
});
