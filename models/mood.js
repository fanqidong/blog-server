import { Schema, model } from 'mongoose';
const moodSchema = new Schema({
    id: Number,
    tag: String,
    content: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
});
moodSchema.index({
    id: 1
});
const Mood = model('Mood', moodSchema);
export default Mood;
