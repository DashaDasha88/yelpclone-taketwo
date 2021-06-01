require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan"); //middleware

const app = express(); //express instance

app.use(cors());
app.use(express.json()); //middleware

console.log("kitty");

//GET all restaurants
app.get("/api/v1/restaurants", async (req, res) => {

  try {
    const results = await db.query("SELECT * FROM restaurants");

    console.log(results);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });

  } catch (err) {
    console.log(err);
  };

});

//GET a specific restaurant or review
app.get("/api/v1/restaurants/:id", async (req, res) => {

  try {

    const restaurants = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      req.params.id,
    ]);

    const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      data: {
        restaurants: restaurant.rows[0],
        reviews: reviews.rows
      },
    })

  } catch (err) {
    console.log(err);
  }


});

//POST a restaurant
app.post("/api/v1/restaurants", async (req, res) => {

  try {

    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );

    res.status(201).json({
      status: "success",
      data: {
        restaurants: results.rows[0],
      }
    });
  } catch (err) {
    console.log(err);
  }

});

//UPDATE a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {

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
app.delete("/api/v1/restaurants/:id", async (req, res) => {

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

//POST a review
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    console.log(newReview);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`o hai - server is listening on ${port}`);
});