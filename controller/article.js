import articleModel from "../models/article";
import formidable from "formidable";
const article = async (req, res, next) => {
  console.log(req.body)
  await new articleModel(req.body).save()
  res.json({
    code: 1,
    msg: "提交成功！"
  });
};
export default {
  article
};
