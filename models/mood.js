import mongoose from "mongoose";
const moodSchema = new mongoose.Schema({
  id: Number,
  tag: String,
  content: String,
  // 创建日期
  createAt: {
    type: Date,
    default: Date.now()
  },
  // 更新日期
  updateAt: {
    type: Date,
    default: Date.now()
  }
});
moodSchema.index({ id: 1 });
const Mood = mongoose.model("Mood", moodSchema);
export default Mood;
