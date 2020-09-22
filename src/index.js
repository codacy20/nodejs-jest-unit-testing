var http = require("http");
var fs = require("fs");

//create a server object:
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    fs.readFile("./coverage/index.html", (err, html) => {
      if (err) res.write("Error");
      else res.write(html);
      res.end();
    });
  })
  .listen(8080); //the server object listens on port 8080
