const express = require("express");

const route = express.Router();
const blogControllers = require("../controllers/blogControllers");

route.get("/", blogControllers.show_blogs);
route.get("/create",blogControllers.show_create_page);
route.post("/", blogControllers.new_blog);
route.get("/:id", blogControllers.show_details);
route.delete("/:id", blogControllers.delete_blog);
module.exports = route;
