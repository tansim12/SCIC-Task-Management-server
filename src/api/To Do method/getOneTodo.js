const Todo = require("../../model/To Do Model/todoModel");

const getOneTodo = async (req, res) => {
  try {
    const id = req.params._id;
    const result = await Todo.findOne({ _id: id });
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};
module.exports = getOneTodo;
