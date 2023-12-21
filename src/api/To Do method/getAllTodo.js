const Todo = require("../../model/To Do Model/todoModel");

const getAllTodo = async (req, res) => {
  const email = req.query?.email;

  let queryObj = {};
  if (email) {
    queryObj.email = email;
  }

  const result = await Todo.find(queryObj);
  const todoData = result.filter((item) => item?.category === "Todo");
  const ongoingData = result.filter((item) => item?.category === "Ongoing");
  const completedData = result.filter((item) => item?.category === "Completed");

  res.send({ todoData, ongoingData, completedData });
};
module.exports = getAllTodo;
