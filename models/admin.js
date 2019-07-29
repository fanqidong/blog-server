import { Schema, model } from 'mongoose';
const adminSchema = new Schema({
    id: Number,
    username: String,
    password: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    admin: {
        type: String,
        default: '管理员'
    }
});
adminSchema.index({
    id: 1
});
const Admin = model('Admin', adminSchema);
export default Admin;