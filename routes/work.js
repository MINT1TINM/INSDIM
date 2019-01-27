var express = require("express");
var router = express.Router();
// models
const work = require("../models/work");

router.post("/createWork", (req, res) => {
  reqData = req.body;
  const newWork = new work({
    title: reqDate.title,
    visibility: false
  });
  newWork.save(err => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success" });
    }
  });
});

router.post("/updateWork", (req, res) => {
  reqData = req.body;
  work.findByIdAndUpdate(
    reqData.id,
    {
      title: reqData.title,
      year: reqData.year,
      client: reqData.client,
      description: reqData.description,
      videoLink: reqData.videoLink,
      visibility: reqData.visibility
    },
    err => {
      if (err) {
        res.json({ msg: "error" });
      } else {
        res.json({ msg: "success" });
      }
    }
  );
});

router.post("/deleteWork", (req, res) => {
  reqData = req.body;
  work.findByIdAndRemove(reqData.id, err => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success" });
    }
  });
});

module.exports = router;
