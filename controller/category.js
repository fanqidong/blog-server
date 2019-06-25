import categoryModel from "../models/category";
import formidable from "formidable";
const newCategory = async (req, res, next) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const { title, desc, cover } = fields.params;
    // console.log(user_name,user_pwd)
    const category = await categoryModel.create({
      $push: { category: { title, desc, cover }, updateAt: Date.now() }
    });
    console.log(category);
  });
  res.json({
    code: 1,
    msg: "提交成功！"
  });
};
module.exports = {
  newCategory
};
