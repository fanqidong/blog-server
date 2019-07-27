import tagModel from "../models/tag";

export const actions = {
  createCategory: async (req, res, next) => {
    try {
      const result = await tagModel(req.body).save();
      res.json({
        code: 1,
        msg: "添加成功"
      });
    } catch (error) {
      res.json({
        code: 0,
        msg: "添加失败"
      });
    }
  },
  queryCategory: async (req, res, next) => {
    try {
      const result = await tagModel.find({});
      res.json({
        code: 1,
        msg: "获取分类成功",
        data: result
      });
    } catch (err) {
      console.log(err);
      res.json({
        code: 0,
        msg: "获取分类失败"
      });
    }
  },
  updateCategory: async (req, res, next) => {
    const conditions = {
      ...req.body,
      updateAt: Date.now()
    };
    delete conditions.id;
    try {
      const result = await tagModel.findByIdAndUpdate({
          _id: req.body.id
        },
        conditions, {
          new: true
        }
      );
      res.json({
        code: 1,
        msg: "修改成功"
      });
    } catch (err) {
      console.log(err);
      res.json({
        code: 0,
        msg: "修改失败"
      });
    }
  },
  deleteCategory: async (req, res, next) => {
    try {
      const result = await tagModel.findByIdAndRemove({
        _id: req.body._id
      });
      res.json({
        code: 1,
        msg: "删除成功"
      });
    } catch (err) {
      console.log(err);
      res.json({
        code: 0,
        msg: "删除失败"
      });
    }
  }
};