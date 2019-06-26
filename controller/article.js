import articleModel from "../models/article";
import formidable from "formidable";
const article = async (req, res, next) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const newArticle = {
       
    }
  });
  res.json({
    code: 1,
    msg: "提交成功！"
  });
};
export default {
  article
};
