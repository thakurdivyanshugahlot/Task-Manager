import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

 const Task = mongoose.model("Task", taskSchema);
 export default Task ;