import categoryModel from "../models/category";
import formidable from "formidable";
const newCategory = async (req, res, next) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const category = await categoryModel.create({});
    console.log(fields);
    console.log(category);
    category.categoryList.push(fields);
    await category.save();
    console.log(category);
    res.json({
      code: 1,
      msg: "添加成功！"
    });
  });
};
export default {
  newCategory
};
