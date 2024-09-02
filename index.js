require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is a login page</h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h1> this is a sign up page <h1>");
});

app.get("/cart", (req, res) => {
  res.send("this is add to cart page");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
