const PORT = 8000;
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();

app.use(cors());

// app.get("/", (req, res) => {
//   res.json("Hi ziomek!");
// });

app.get("/joke", (req, res) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    },
  };
  const url =
    "https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&idRange=0-150";

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => console.error(err));
});

app.listen(PORT, () =>
  console.log(`Witaj Patryk! Twój serwer działa na porcie ${PORT}`)
);
