var express = require("express");
var router = express.Router();
// models
const work = require("../models/work");
const news = require("../models/news");

const yearList = [];
const thisYear = parseInt(new Date().getFullYear());
for (let index = thisYear; index >= 2014; index--) {
  yearList.push(index);
}

/* GET home page. */
router.get("/", (req, res) => {
  news.find((err, newsList) => {
    if (err) return res.status(500).send(err);
    return res.render("index", { newsList: newsList, yearList: yearList });
  });
});

router.get("/collection/:year", (req, res) => {
  work.find(
    { year: req.params.year, visibility: true },
    "title client titlePic",
    (err, workList) => {
      if (err) return res.status(500).send(err);
      console.log(workList);
      return res.render("collection", {
        workList: workList,
        year: req.params.year,
        yearList: yearList
      });
    }
  );
});

router.get("/collection/:year/:id", (req, res) => {
  work.findById(req.params.id, (err, workDetail) => {
    if (err) return res.status(500).send(err);
    return res.render("collectionDetail", {
      workDetail: workDetail,
      yearList: yearList
    });
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    yearList: yearList
  });
});
router.get("/contact", (req, res) => {
  res.render("contact", {
    yearList: yearList
  });
});

module.exports = router;
