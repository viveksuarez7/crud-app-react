// cREATE HTTP SERVER
const http = require("http");
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const deleteReq = require("./methods/delete-request");
const putReq = require("./methods/put-request");
let movies = require("./data/movies.json")

require("dotenv").config(); // to use .env file and port

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  req.movies = movies
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-type", "application/json");
      res.write(JSON.stringify({ title: "404", message: "Route not found" }));
      res.end();
  }
});

// by default createServer is a get command here

server.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
