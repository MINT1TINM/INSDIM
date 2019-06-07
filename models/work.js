import mongoose from "mongoose";
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

const work = mongoose.model("Work", workSchema);
export default work;
