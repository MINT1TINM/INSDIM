import { Router } from "express";
var router = Router();

// models
import work from "../models/work";
import news from "../models/news";

const yearList = [];
const thisYear = parseInt(new Date().getFullYear());
for (let index = thisYear; index >= 2014; index--) {
  yearList.push(index);
}

/* GET home page. */
router.get("/", async (req, res) => {
  try {
    const newsList = await news.find(
      { visibility: true },
      "title author type collaborator content titlePic",
      {
        sort: [{ _id: -1 }]
      }
    );
    res.render("index", { newsList: newsList, yearList: yearList });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/collection/:year", async (req, res) => {
  try {
    const workList = await work.find(
      { year: req.params.year, visibility: true },
      {
        sort: [{ _id: -1 }]
      }
    );
    return res.render("collection", {
      workList: workList,
      year: req.params.year,
      yearList: yearList
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/collection/:year/:id", async (req, res) => {
  try {
    const workDetail = await work.findById(req.params.id);
    res.render("collectionDetail", {
      workDetail: workDetail,
      yearList: yearList
    });
  } catch (err) {
    return res.status(500).send(err);
  }
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

export default router;
