import { response } from "express";
import todo from "../models/model.js";
const CreateTask = async (request, response) => {
  try {
    const { task, status } = request.body;
    const newTask = new todo({ task, status });
    await newTask.save();
    return response.status(200).json({
      status: "succeed",
      message: `Task Added at ${newTask._id}`,
      data: newTask,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
const EditTask = async (request, response) => {
  try {
    const { _id } = request.params;
    const { task, status } = request.body;
    const foundTask = await todo.findByIdAndUpdate({ _id }, { task, status });
    if (!foundTask) {
      return response.status(404).send({
        status: "Failure",
        message: `Task Not Found at ${_id}`,
      });
    }
    await foundTask.save();

    return response.status(200).json({
      status: "succeed",
      message: `Task Updated at ${newTask._id}`,
      data: newTask,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
const GetTasks = async (request, response) => {
  try {
    const allTasks = await todo.find({});
    if (!allTasks) {
      return response.status(404).send({
        status: "Failure",
        message: "No Tasks To Show",
      });
    }
    response.status(200).send(allTasks);
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};

const GetTask = async (request, response) => {
  try {
    const { _id } = request.params;
    const FoundTask = await todo.find({ _id });
    if (!FoundTask) {
      return response.status(404).send({
        status: "Failure",
        message: `Task Not Found at ${_id}`,
      });
    }
    return response.status(200).send(FoundTask);
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
const DeleteTask = async (request, response) => {
  try {
    const { _id } = request.params;
    const deletedTask = await todo.findByIdAndRemove({ _id });
    if (!deletedTask) {
      return response.status(404).send({
        status: "Failure",
        message: `Task Not Found at ${_id}`,
      });
    }
    return response.status(200).send({
      status: "succeed",
      message: `Task Deleted at ${deletedTask._id}`,
      data: deletedTask.task,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};

export default { CreateTask, EditTask, GetTasks, GetTask, DeleteTask };
