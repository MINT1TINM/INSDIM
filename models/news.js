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
  pic: [
    {
      title: String,
      url: String,
      createTime: {
        type: String,
        default: Date.now()
      },
      type: String
    }
  ]
});

module.exports = mongoose.model("News", newsSchema);
