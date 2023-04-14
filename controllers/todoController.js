import TodoModel from "../models/todoModel.js";

const getAllTodos = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Route to get all todos.",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

const getSingleTodo = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Route to get single todos.",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await TodoModel.create(req.body);
    res.status(201).json({
      status: "success",
      message: "todo created successfully!",
      Todo: todo,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Route to update todos.",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Route to delete todos.",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Some error occured!",
      error: err,
    });
  }
};

export default {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
