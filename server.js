const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //Setting a header Type
  res.setHeader("Content-Type", "text/html");

  //Sending an html file.
  let path = "./views/";

  //Sending file according to the url or basic routing.
  switch (req.url) {
    case "/":
      path += "index.html";
      //Setting the status codes 200 -> everything is OK.
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      //Setting the status codes 200 -> everything is OK.
      res.statusCode = 200;
      break;
    case "/about-us":
      //Setting the status codes 301 -> resource permanentlhy removed!.
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      //Setting the status codes 404 -> Resource not found!.
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
