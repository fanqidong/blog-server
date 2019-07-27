import adminModel from "../models/admin";
const login = async (req, res, next) => {
    const { username, password } = req.body;
    const admin = await adminModel.findOne({
        username
    });
    if (!admin) {
        const newAdmin = {
            username: username,
            password: password,
            created_time: +new Date()
        };
        await adminModel.create(newAdmin);
        res.json({
            code: 1,
            msg: "登录成功！"
        });
    }
  await admin.password === password ?
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