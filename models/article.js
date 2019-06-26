import mongoose from "mongoose";
const articleSchema = new mongoose.Schema(
  {
    id: Number,
    // 作者
    author: {
      type: String,
      ref: "User"
    },
    category: Array,
    // 标题
    title: String,
    // 摘要
    desc: String,
    // 封面
    cover: String,
    // 内容
    mdContent: String,
    // 标签
    tag: Array,
    // 阅读量
    readCount: {
      type: Number,
      default: 0
    },
    // 状态 (public or private)
    state: {
      type: String,
      default: "public"
    },
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
  },
  {
    collection: "blog"
  }
);
articleSchema.index({ id: 1 });
const NewArticle = mongoose.model("NewArticle", articleSchema);
export default NewArticle;