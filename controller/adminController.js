const adminModel = require('../models/admin')
const formidable = require('formidable')
const login = async (req, res, next) => {
    const form = new formidable.IncomingForm()
    form.parse(req, async function (err, fields, files) {
        const {
            user_name,
            user_pwd
        } = fields.username
        console.log(user_name,user_pwd)
        const admin = await adminModel.findOne({
            user_name
        })
        if (!admin) {
            const newAdmin = {
                user_name: user_name,
                user_pwd: user_pwd,
                created_time: +new Date(),
            }
            await adminModel.create(newAdmin)
            res.json({
                status: 1,
                success: '登录成功！'
            })
        } else {
            res.send({
                status: 1,
                success: '登录成功'
            })
        }
    })


}
module.exports = {
    login
}