const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema({
  title: { type: String },
  year: { type: Date },
  client: { type: String },
  description: { type: String },
  videoLink: { type: String },
  visibility: { type: Boolean },
  createTime: {
    type: String,
    default: Date.now()
  }
});

module.exports = mongoose.model("work", workSchema);
