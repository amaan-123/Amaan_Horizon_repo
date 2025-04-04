// This is a sample Node.js application that uses the dotenv package to load environment variables from a .env file.
// It also uses the express package to create a simple web server that responds with "Hello World!" when accessed at the root URL.
// The application listens on a port specified in the .env file.
require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
