const users = require("../MOCK_DATA.json");
const fs = require("fs/promises");
const getData = (req, res) => {
  res.json(users);
};

const createData = (req, res) => {
  let data = req.body;
  console.log(data);
  users.push(data);
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err = {}));
  res.end("<h1>This is require</h1>");
};
const updateData = (req, res) => {
  const id = req.params.id;
  let index = users.findIndex((user) => user.id === parseInt(id));
  console.log(index, "  index");

  users[index].first_name = "Adam ";
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err = {}));

  res.end("<h1>This is update</h1>");
};
const getById = (req, res) => {
  let id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  res.json(user);
};
module.exports = {
  getData,
  createData,
  updateData,
  getById,
};
