const express = require("express");
const mongoose = require("mongoose");

const app = express();
const env = process.env.ENV || "dev";

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send(`App running in ${env} 🚀`);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => console.log("App listening on 3000"));

