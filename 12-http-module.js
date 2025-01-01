//HTTP Module

const http = require("http");

// console.log(http);

const server = http.createServer((req, res) => {
  // console.log(req);

  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("This is about us");
  }
  if (req.url === "/contact") {
    res.end("Here is how we can contact us.");
  }
  res.end(`
        <h1>Oops!</h1>
        <p>we can't seem to find the page you are looling for</p>
        <a href = '/'>back home</a>`);

  //   res.write("Welcome to our home page");
  //   res.end();
});

server.listen(5000);
