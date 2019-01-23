var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});
router.get("/work", (req, res) => {
  res.render("work");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
