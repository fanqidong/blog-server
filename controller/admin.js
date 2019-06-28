import adminModel from "../models/admin";
const login = async (req, res, next) => {
    const { user_name, user_pwd } = req.body;
    const admin = await adminModel.findOne({
        user_name
    });
    if (!admin) {
        const newAdmin = {
            user_name: user_name,
            user_pwd: user_pwd,
            created_time: +new Date()
        };
        await adminModel.create(newAdmin);
        res.json({
            code: 1,
            msg: "登录成功！"
        });
    }
  await admin.user_pwd === user_pwd ?
        res.json({
            code: 1,
            msg: "登录成功！"
        }) :
        res.json({
            code: 0,
            msg: "密码错误"
        });
};
export default {
    login
};