const express = require("express");
const route = express.Router();
const users = require("../MOCK_DATA.json");
const studentContoller = require("../controller/studentController");
route.use(express.json());
// app.use(studentContoller);
// const fs = require("fs/promises");
route.get("/get", (req, res) => {
  //   res.end("<h1>This is require</h1>");
  studentContoller.getData(req, res);
});
route.get("/getById/:id", (req, res) => {
  //   let id = req.params.id;
  //   const user = users.find((user) => user.id === parseInt(id));
  //   res.json(user);
  studentContoller.getById(req, res);
});
route.post("/student/create", (req, res) => {
  studentContoller.createData(req, res);
});
route.put("/student/update/:id", (req, res) => {
  //   const id = req.params.id;
  //   let index = users.findIndex((user) => user.id === parseInt(id));
  //   console.log(index, "  index");
  //   users[index].first_name = "Adam ";
  //   fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err = {}));
  //   res.end("<h1>This is update</h1>");
  studentContoller.updateData(req, res);
});
route.delete("/student/delete/:id", (req, res) => {
  res.end("<h1>This is delete</h1>");
});

module.exports = route;
