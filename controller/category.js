import categoryModel from "../models/category";
import formidable from "formidable";
const category = async (req, res, next) => {
    console.log(req.body)
    const data = await  new categoryModel(req.body).save()
    console.log(data)
    res.json({
        code: 1,
        msg: "添加成功！"
    });
};
export default {
    category
};