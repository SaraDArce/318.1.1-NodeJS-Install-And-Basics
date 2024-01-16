// import http from "http"
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// Create server
const server = http.createServer((req, res) => {
  console.log("Request Received");
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.end("Hello World!\n");
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.write('<h1 style="color: red">Hello World!</h1>');
//   res.write("<p>I wonder what else we can send...</p>");
//   res.end();
// });

// Route 1: /hello
if (req.url === "/hello") {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write('<h1 style="color: green">Greetings from the Silly Route!</h1>');
  res.write("<p>Welcome to the land of unicorns and rainbows!</p>");
  res.end();
}

// Route 2: /funny-haha
else if (req.url === "/joke") {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write('<h1 style="color: purple">Time for a Joke!</h1>');
  res.write(
    "<p>Why don't scientists trust atoms? Because they make up everything!</p>"
  );
  res.end();
}

// Default Route

server.listen(3000, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/");
});
