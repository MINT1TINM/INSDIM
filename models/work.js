const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema
const workSchema = new Schema({
  title: String,
  year: String,
  client: String,
  collaborator: String,
  pictures: String,
  description: String,
  videoLink: String,
  visibility: String,
  createTime: {
    type: Date,
    default: Date.now()
  },
  titlePic: String,
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
