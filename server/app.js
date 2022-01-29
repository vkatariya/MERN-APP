const dotenv = require("dotenv");

const express = require("express");
const app = express();
//middleware

dotenv.config({ path: "./config.env" });
require("./db/conn");

const PORT = process.env.PORT;

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

app.listen(PORT, () => {
  console.log(`Server is running port number ${PORT}`);
});
