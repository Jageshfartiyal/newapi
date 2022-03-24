const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors= require("cors")

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/Team");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());

app.use(User);

app.listen(port, () => {
  const url=`http://localhost:${port}`
  console.log(`Server is running on port : ${url}`);
});
