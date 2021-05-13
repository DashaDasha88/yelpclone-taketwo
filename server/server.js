require("dotenv").config();
const express = require("express");

const app = express(); //express instance

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`o hai there friend - server is litening on ${port}`);
});