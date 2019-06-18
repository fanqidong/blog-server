import mongoose from "mongoose";
const mood = new mongoose.Schema(
  {
    id: Number,
    created_time: String,
    last_time: String,
    moods: [
      {
        id: Number,
        tag: String,
        content: String,
        created_time: { type: Date, default: Date.now },
        last_time: { type: Date, default: "" }
      }
    ]
  },
  {
    collection: "blog"
  }
);
adminSchema.index({ id: 1 });
const Mood = mongoose.model("Mood", mood);
export default Mood;
