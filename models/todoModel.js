import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  index: {
    type: Number,
    max: 20,
  },
  name: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  isCanceled: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("TodoModel", todoSchema);

export default TodoModel;
