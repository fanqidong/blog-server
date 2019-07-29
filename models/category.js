import { Schema, model } from 'mongoose';
const categorySchema = new Schema({
    id: Number,
    // 标题
    title: String,
    // 摘要
    desc: String,
    // 封面
    cover: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
});
categorySchema.index({
    id: 1
});
const Category = model('Category', categorySchema);
export default Category;
