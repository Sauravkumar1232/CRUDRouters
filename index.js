const express = require("express");
const app = express();
const student = require("./routes/studentRoute");
const connect = require("./connection");
connect();
app.use(student);
app.listen(3000, (error) => {
  if (error) {
    console.log("Error while ");
  }
  console.log("Server is started at 3000");
});
