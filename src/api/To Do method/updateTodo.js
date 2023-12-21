const Todo = require("../../model/To Do Model/todoModel");
const { deleteOne } = require("../../model/To Do Model/todoModel");

const updateTodo = async (req, res) => {
  const id = req.params._id;
  const info = req.body;
  const result = await Todo.updateOne({ _id: id }, { ...info });
  if (result?.acknowledged) {
    res.send(result?.acknowledged);
  }
};
module.exports = updateTodo;
