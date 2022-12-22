const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

//Setting up the express app.
const app = express();

//Connect to mongoDB
const dbURI =
  "mongodb+srv://nodeuser:user1234@nodecourse.489lwct.mongodb.net/node-course?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
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
app.use(express.static("public"));

//Creating and saving blogs to database
app.get("/new-blog", (req, res) => {
  const blog = new Blog({
    title: "A christmass blog.",
    snippet: "All about the Christmass eve.",
    body: "Christmass is a special day to most of the christians except the Adventists.",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blog", (req, res) => {
  Blog.findById("63a4a8edde04997a16fb2ce4")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Responding to requests just  as in node but in a much easier way.
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "American whatsapp number ",
      snippet:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos molestiae facere atque perferendis. Ipsam, accusantium vitae? Officia accusantium officiis dolor maxime cum corrupti error neque, commodi aliquam quo, eius odio voluptatibus vel veritatis! Odit odio vero, culpa sapiente consequatur nemo assumenda. Id deleniti vitae, amet veniam minus neque veritatis suscipit aut alias expedita quam eaque dolore quisquam hic modi provident voluptatibus nam minima dolor maxime corporis voluptate maiores eligendi. Quas, repellat facere! Hic sit eos impedit officia! Ipsam ea hic consequuntur optio exercitationem itaque explicabo eum aliquid maxime nesciunt necessitatibus, ex vitae rem corporis, iusto voluptatum. Autem perspiciatis cupiditate quaerat.",
    },
    {
      title: " Auto reply robot",
      snippet:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos molestiae facere atque perferendis. Ipsam, accusantium vitae? Officia accusantium officiis dolor maxime cum corrupti error neque, commodi aliquam quo, eius odio voluptatibus vel veritatis! Odit odio vero, culpa sapiente consequatur nemo assumenda. Id deleniti vitae, amet veniam minus neque veritatis suscipit aut alias expedita quam eaque dolore quisquam hic modi provident voluptatibus nam minima dolor maxime corporis voluptate maiores eligendi. Quas, repellat facere! Hic sit eos impedit officia! Ipsam ea hic consequuntur optio exercitationem itaque explicabo eum aliquid maxime nesciunt necessitatibus, ex vitae rem corporis, iusto voluptatum. Autem perspiciatis cupiditate quaerat.",
    },
    {
      title: " Make money online",
      snippet:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos molestiae facere atque perferendis. Ipsam, accusantium vitae? Officia accusantium officiis dolor maxime cum corrupti error neque, commodi aliquam quo, eius odio voluptatibus vel veritatis! Odit odio vero, culpa sapiente consequatur nemo assumenda. Id deleniti vitae, amet veniam minus neque veritatis suscipit aut alias expedita quam eaque dolore quisquam hic modi provident voluptatibus nam minima dolor maxime corporis voluptate maiores eligendi. Quas, repellat facere! Hic sit eos impedit officia! Ipsam ea hic consequuntur optio exercitationem itaque explicabo eum aliquid maxime nesciunt necessitatibus, ex vitae rem corporis, iusto voluptatum. Autem perspiciatis cupiditate quaerat.",
    },
  ];
  res.render("index", { blogs });
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
