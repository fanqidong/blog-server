import mongoose from 'mongoose'
const adminSchema = new mongoose.Schema(
  {
    id: Number,
    user_name: String,
    user_pwd: String,
    created_time: String,
    admin: {
      type: String,
      default: "管理员"
    }
  },
  {
    collection: "blog"
  }
);
adminSchema.index({ id: 1 });
const Admin  = mongoose.model("Admin", adminSchema);
export default Admin