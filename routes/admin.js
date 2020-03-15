const express = require("express");
const router = express.Router();
const News = require("../models/news");

router.all("*", (req, res, next) => {
  if (!req.session.admin) {
    res.redirect("login");
    return;
  }

  next();
});

/* GET home page. */
router.get("/", (req, res) => {
  // const newsData = new News({
  //   title: "test title",
  //   description: "Desc"
  // });

  // newsData.save(err => {
  //   console.log(err);
  // });

  res.render("admin/index", { title: "Admin" });
});

router.get("/news/add", (req, res) => {
  res.render("admin/news-form", { title: "Add news" });
});

module.exports = router;
