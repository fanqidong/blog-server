import articleModel from "../models/article";
const article = async (req, res, next) => {
  console.log(req.body)
  try {
    const result = await new articleModel(req.body).save()
    res.json({
      code: 1,
      msg: "添加成功！"
    });
  } catch (error) {
    res.json({
      code: 1,
      msg: "添加失败！"
    });
  }
};
export default {
  article
};
