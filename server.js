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
      //Setting the status codes.
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      //Setting the status codes.
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      //Setting the status codes.
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
