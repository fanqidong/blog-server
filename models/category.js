import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  id: Number,
  // 标题
  title: String,
  // 摘要
  desc: String,
  // 封面
  cover: String,
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
categorySchema.index({ id: 1 });
const Category = mongoose.model("Category", categorySchema);
export default Category;
