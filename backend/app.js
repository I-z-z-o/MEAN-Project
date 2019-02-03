const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");

const path = require("path");


const app = express();


mongoose.connect("mongodb+srv://Izzo:b0vSebhIjOJPW7Ya@cluster0-hokby.mongodb.net/node-angular?retryWrites=true")
.then(() => {

  console.log('Connected to Database!');

}).catch(() => {

console.log('Connection to Database failed!')

});

app.use(bodyParser.json());


app.use("/images", express.static(path.join("backend/images")));


app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();


});




app.use("/api/posts", postsRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
