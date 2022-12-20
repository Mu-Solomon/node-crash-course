const express = require("express");

//Setting up the express app.
const app = express();

//Registering the ejs engine
app.set("view engine", "ejs");

//Responding to requests just  as in node but in a much easier way.
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

//404 page (It must be at the very bottom)
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000);
