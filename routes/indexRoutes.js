const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("pages/index");
});

module.exports = indexRouter;
