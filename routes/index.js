import { Router } from "express";
var router = Router();

// models
import work from "../models/work";
import news from "../models/news";

import i18n from "i18n";

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

    res.locals.__ = res.__ = function() {
      return i18n.__.apply(req, arguments);
    };

    res.render("index", {
      newsList: newsList,
      yearList: yearList
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/collection/:year", async (req, res) => {
  try {
    const workList = await work.find(
      {
        year: req.params.year,
        visibility: "true"
      },
      "title titlePic client",
      {
        sort: [{ _id: -1 }]
      }
    );
    console.log(workList);

    res.locals.__ = res.__ = function() {
      return i18n.__.apply(req, arguments);
    };

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
    console.log(workDetail);

    res.locals.__ = res.__ = function() {
      return i18n.__.apply(req, arguments);
    };

    res.render("collectionDetail", {
      workDetail: workDetail,
      yearList: yearList
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/about", (req, res) => {
  res.locals.__ = res.__ = function() {
    return i18n.__.apply(req, arguments);
  };

  res.render("about", {
    yearList: yearList
  });
});
router.get("/contact", (req, res) => {
  res.locals.__ = res.__ = function() {
    return i18n.__.apply(req, arguments);
  };
  res.render("contact", {
    yearList: yearList
  });
});

export default router;
