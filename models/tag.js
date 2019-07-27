import {
  Schema,
  model
} from "mongoose";
const tagSchema = new Schema({
  id: Number,
  label: String,
  value: String,
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
});
tagSchema.index({
  id: 1
});
const Tag = model("Tag", tagSchema);
export default Tag;