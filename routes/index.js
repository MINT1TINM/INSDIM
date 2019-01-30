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

router.get("/collection/:year", (req, res) => {
  work.find(
    { year: req.params.year, visibility: '1' },
    "title client titlePic",
    (err, workList) => {
      if (err) return res.status(500).send(err);
      console.log(workList);
      return res.render("collection", {
        workList: workList,
        year: req.params.year
      });
    }
  );
});

router.get("/collection/older", (req, res) => {
  const startYear = new Date().getFullYear() - 3;
  work.find(
    { year: { $lt: startYear }, visibility: true },
    "title client titlePic year",
    (err, workList) => {
      if (err) return res.status(500).send(err);
      return res.render("collection", {
        workList: workList
      });
    }
  );
});

router.get("/collection/detail/:id", (req, res) => {
  work.findById(req.params.id, (err, workDetail) => {
    if (err) return res.status(500).send(err);
    return res.render("collectionDetail", { workDetail: workDetail });
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
