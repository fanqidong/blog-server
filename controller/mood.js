import moodModel from "../models/mood";
const mood = async (req, res, next) => {
  console.log(req.body);
  const data = await new moodModel(req.body).save();
  console.log(data);
  res.json({
    code: 1,
    msg: "添加成功！"
  });
};
export default {
  mood
};
