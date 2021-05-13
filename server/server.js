require("dotenv").config();
const express = require("express");
const db = require("./db");

const morgan = require("morgan"); //middleware
const app = express(); //express instance

app.use(express.json()); //middleware

//GET all restaurants
app.get("/restaurants", async (req, res) => {

  const results = await db.query("SELECT * FROM restaurants");

  console.log(results);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["saigon lotus", "chipotle"],
    },
  });
});

//GET a specific restaurant
app.get("/restaurants/:id", (req, res) => {

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "chipotle"
    }
  })
});

//POST a restaurant
app.post("/restaurants", (req, res) => {

  res.status(201).json({
    status: "success",
    data: {
      restaurant: "chipotle"
    }
  })
});

//UPDATE a restaurant
app.put("/restaurants/:id", (req, res) => {

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "chipotle"
    }
  })
});

//DELETE a restaurant
app.delete("/restaurants/:id", (req, res) => {

  res.status(204).json({
    status: "success",
  })
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`o hai - server is listening on ${port}`);
});