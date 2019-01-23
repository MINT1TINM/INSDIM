var express = require("express");
var router = express.Router();
// models
const work = require("../models/work");
const news = require("../models/news");

/* GET home page. */
router.get("/", (req, res) => {
  news.find((err, newsList) => {
    if (err) return res.status(500).send(err);
    return res.render("index", { newsList: newsList });
  });
});

router.get("/work", (req, res) => {
  work.find((err, workList) => {
    if (err) return res.status(500).send(err);
    return res.render("work", { workList: workList });
  });
});

// router.get("/add", (req, res) => {
//   const newWork = new news({
//     title: "test",
//   });
//   newWork.save((err, data) => {
//     if (err) {
//       return console.log(err);
//     }
//   });
//   res.render("work");
// });

router.get("/work/:id", (req, res) => {
  work.findById(req.params.id, (err, workDetail) => {
    if (err) return res.status(500).send(err);
    return res.render("workDetail", { workDetail: workDetail });
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
