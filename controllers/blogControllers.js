const Blog = require("../models/blog");

const show_blogs = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("./blogs/index", { title: "Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const new_blog = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const show_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("./blogs/details", { title: "Blog details", blog: result });
    })
    .catch((err) => {
      res.status(404).render("404", { title: " Not found" });
    });
};

const delete_blog = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const show_create_page = (req, res) => {
  res.render("./blogs/create", { title: " New blog" });
};

module.exports = {
  show_blogs,
  new_blog,
  show_details,
  delete_blog,
  show_create_page,
};
