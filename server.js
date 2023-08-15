const express = require("express");

const app = express();

const fruits = require("./models/fruits.js");

const PORT = 8083;

//root route
app.get("/", (req, res) => {
  res.send("Welcome Express_MongoDB");
});

//index route
app.get("/fruits", (req, res) => {
  res.send(fruits);
});

//show route
app.get("/fruits/:indexOfFruits", (req, res) => {
  let fruit = fruits(req.params.indexOfFruits);
  if (fruit) {
    res.send(fruit);
  } else {
    res.send("fruits not found");
  }
});

//Server listen
app.listen(PORT, (req, res) => {
  console.log("Listening on port", PORT);
});
