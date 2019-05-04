const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    id: Number,
    user_name: String,
    user_pwd: String,
    created_time: String,
    admin: {
        type: String,
        default: '管理员'
    }
}, {
    collection: 'blog'
})
adminSchema.index({id: 1})
module.exports=mongoose.model('Admin',adminSchema)