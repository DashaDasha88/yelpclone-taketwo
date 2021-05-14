require("dotenv").config();
const express = require("express");
const db = require("./db");

const morgan = require("morgan"); //middleware
const app = express(); //express instance

app.use(express.json()); //middleware

//GET all restaurants
app.get("/restaurants", async (req, res) => {

  try {
    const results = await db.query("SELECT * FROM restaurants");

    console.log(results);

    res.status(200).json({
      status: "success",
      results: results[rows].length,
      data: {
        restaurants: results.rows
      },
    });

  } catch (err) {
    console.log(err);
  };

});

//GET a specific restaurant
app.get("/restaurants/:id", async (req, res) => {

  try {

    const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      results: results[rows].length,
      data: {
        restaurants: results.rows[0],
      }
    })

  } catch (err) {
    console.log(err);
  }


});

//POST a restaurant
app.post("/restaurants", async (req, res) => {

  try {

    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      }
    });
  } catch (err) {
    console.log(err);
  }

});

//UPDATE a restaurant
app.put("/restaurants/:id", async (req, res) => {

  try {

    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = #3 where id = $4 returning * ",
      [req.body.name, req.body.location, req.body.price_range, req.params.id],
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      }
    })

  } catch (err) {
    console.log(err);
  }


});

//DELETE a restaurant
app.delete("/restaurants/:id", async (req, res) => {

  try {

    const results = await db.query("DELETE FROM restaurants WHERE id = $1",
      [req.params.id],
    );
    
    res.status(204).json({
      status: "success",
    })

  } catch (err) {
    console.log(err);
    };


});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`o hai - server is listening on ${port}`);
});