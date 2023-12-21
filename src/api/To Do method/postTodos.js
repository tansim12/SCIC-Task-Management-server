const Todo = require("../../model/To Do Model/todoModel");

const postTodos = async (req, res) => {
  const info = req.body;
  const newInfo = new Todo(info);
  const result = await newInfo.save();
  if (result) {
    res.send({ success: true });
  }
};
module.exports = postTodos;
