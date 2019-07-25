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
  descriptionEn: String,
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

const work = mongoose.model("work", workSchema);
export default work;
