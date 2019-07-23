import { Router } from "express";
var router = Router();

// models
import work from "../models/work";
import news from "../models/news";

import { chiefDesigner, awards, exhibition } from "../utils/timeline";
import { getLocale } from "../utils/locale";

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
      "title author type collaborator content titlePic createTime",
      {
        sort: [{ _id: -1 }]
      }
    );

    // date format
    for (let i = 0; i < newsList.length; i++) {
      let createTime = new Date(newsList[i].createTime);
      newsList[i].createTimeFormat =
        createTime.getFullYear() +
        "/" +
        createTime.getMonth() +
        "/" +
        createTime.getDate();
    }

    res.render("index", {
      newsList: newsList,
      yearList: yearList
    });
  } catch (err) {
    return res.render("error");
  }
});

router.get("/news/:id", async (req, res) => {
  try {
    const post = await news.findById(req.params.id);
    console.log(post);

    res.render("news", {
      post: post,
      yearList: yearList
    });
  } catch (err) {
    return res.render("error");
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

    return res.render("collection", {
      workList: workList,
      year: req.params.year,
      yearList: yearList
    });
  } catch (err) {
    return res.render("error");
  }
});

router.get("/collection/:year/:id", async (req, res) => {
  try {
    const workDetail = await work.findById(req.params.id);
    console.log(workDetail);

    res.render("collectionDetail", {
      workDetail: workDetail,
      yearList: yearList
    });
  } catch (err) {
    return res.render("error");
  }
});

router.get("/about", (req, res) => {
  res.render("about", {
    yearList: yearList
  });
});

router.get("/contact", (req, res) => {
  const locale = getLocale(req);
  res.render("contact", {
    yearList: yearList,
    locale: locale
  });
});

router.get("/timeline", (req, res) => {
  try {
    const locale = getLocale(req);
    res.render("timeline", {
      yearList: yearList,
      chiefDesigner: chiefDesigner,
      awards: awards,
      exhibition: exhibition,
      locale: locale
    });
  } catch (err) {
    console.log(err);
    return res.render("error");
  }
});

export default router;
