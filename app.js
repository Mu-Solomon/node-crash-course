const express = require("express");

//Setting up the express app.
const app = express();

//Responding to requests just  as in node but in a much easier way.
app.get("/", (req, res) => {
 // res.send("<p> This is the homepage. </p>");
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
 // res.send("<p> This is the about page. </p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

app.listen(3000);
