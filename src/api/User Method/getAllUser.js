const User = require("../../model/UserModel/User");

const getAllUser = async (req, res) => {
  const result = await User.find();
  res.send(result);
};
module.exports = getAllUser;
