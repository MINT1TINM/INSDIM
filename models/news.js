import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  author: String,
  content: String,
  post: String,
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
      name: String,
      createTime: {
        type: Date,
        default: Date.now()
      }
    }
  ]
});

const news = mongoose.model("post", postSchema);
export default news;
