const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  createTime: {
    type: String,
    default: Date.now()
  },
  author: String,
  content: String,
  titlePic: {
    title: String,
    url: String,
    name: String,
    createTime: {
      type: Date,
      default: Date.now()
    }
  }
});

module.exports = mongoose.model("News", newsSchema);
