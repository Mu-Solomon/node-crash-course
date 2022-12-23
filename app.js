const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { result } = require("lodash");
const blogRoutes = require("./routers/blogRoutes");

//Setting up the express app.
const app = express();

//Connect to mongoDB
const dbURI =
  "mongodb+srv://nodeuser:user1234@nodecourse.489lwct.mongodb.net/node-course?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
  .connect(dbURI)
  .then((result) => {
    //First connect to the database then start listening for requests.
    console.log("Connected to the database.");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

//Registering the ejs engine
app.set("view engine", "ejs");

//Middleware & Static files
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Redirecting
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

//Blog routes
app.use("/blogs",blogRoutes);

// Rendering the database documents in the view

app.get("/about", (req, res) => {
  res.render("about", { title: " About " });
});

//404 page (It must be at the very bottom)
app.use((req, res) => {
  res.status(404).render("404", { title: " Not found" });
});
