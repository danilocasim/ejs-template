const path = require("path");
const express = require("express");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./routes/indexRoutes");

app.use("/", indexRouter);

const PORT = 9000;
app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`The server is listening at http://localhost:${PORT}/`);
});
