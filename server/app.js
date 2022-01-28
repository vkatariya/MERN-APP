const mongoose = require("mongoose");

const express = require("express");
const app = express();
//middleware
// const DB ="";

mongoose
  .connect(
    "mongodb+srv://vkatariya:8DUPfgE8xZKnHp7l@cluster0.boun3.mongodb.net/mern-app?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.warn("db connection done");
  });

const middleware = (req, res, next) => {
  console.log(`Hello My Middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello world from the  server`);
});
app.get("/about", middleware, (req, res) => {
  console.log(`about middleware`);
  res.send(`Hello world About from the  server`);
});
app.get("/contact", (req, res) => {
  res.send(`Hello world Contact  from the  server`);
});
app.get("/signin", (req, res) => {
  res.send(`Hello world Sign in from the  server`);
});
app.get("/signuo", (req, res) => {
  res.send(`Hello Register world Sign in from the  server`);
});

app.listen(3000, () => {
  console.log(`Server is running port number 3000`);
});
