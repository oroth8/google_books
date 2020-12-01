const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

// Load config
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 8080;

connectDB();

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
