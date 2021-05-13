require("dotenv").config();
const express = require("express");

const app = express(); //express instance

//GET all restaurants
app.get("/restaurants", (req, res) => {
  res.json({
    status: "success",
    restaurant: "chipotle"
  });
});

//GET a specific restaurant
app.get("/restaurants/:id", (req, res) => {

});

//POST a restaurant
app.post("/restaurants", (req, res) => {

});

//UPDATE a restaurant
app.put("/restaurants/:id", (req, res) => {

});

//DELETE a restaurant
app.delete("/restaurants/:id", (req, res) => {

});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`o hai - server is litening on ${port}`);
});