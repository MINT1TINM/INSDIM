const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema
const workSchema = new Schema({
  title: String,
  year: Date,
  client: String,
  description: String,
  videoLink: String,
  visibility: Boolean,
  createTime: {
    type: String,
    default: Date.now()
  },
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

module.exports = mongoose.model('Work', workSchema);
