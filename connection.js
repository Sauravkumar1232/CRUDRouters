const mongoose = require("mongoose");
const connect = async () => {
  try {
    let connection = await mongoose.connect(
      "mongodb://localhost:27017/college",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch {}
};
module.exports = connect;
