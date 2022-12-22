const express = require("express");
const morgan = require("morgan");

//Setting up the express app.
const app = express();

//Connect to mongoDB
const dbURI =
  "mongodb+srv://nodeuser:user1234@nodecourse.489lwct.mongodb.net/?retryWrites=true&w=majority";

//Registering the ejs engine
app.set("view engine", "ejs");

//Middleware
app.use(morgan("dev"));

//Express middleware
app.use(express.static("public"));

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

app.listen(3000);
