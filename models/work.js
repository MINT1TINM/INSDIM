const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema
const workSchema = new Schema({
  title: String,
  year: String,
  client: String,
  description: String,
  videoLink: String,
  visibility: String,
  createTime: {
    type: Date,
    default: Date.now()
  },
  titlePic: {
    title: String,
    url: String,
    name: String,
    createTime: {
      type: Date,
      default: Date.now()
    }
  },
  pic: [
    {
      title: String,
      url: String,
      createTime: {
        type: Date,
        default: Date.now()
      }
    }
  ]
});

module.exports = mongoose.model("Work", workSchema);
