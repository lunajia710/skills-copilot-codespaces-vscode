// Create web server
// 1. create a web server
// 2. create a router
// 3. create a request handler
// 4. start the web server

// 1. create a web server
const http = require("http");
const server = http.createServer();

// 2. create a router
const router = require("./router");

// 3. create a request handler
server.on("request", (req, res) => {
  router(req, res);
});

// 4. start the web server
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// Path: router.js
// Create a router
// 1. import the comments controller
// 2. create a router
// 3. create a route
// 4. export the router

// 1. import the comments controller
const commentsController = require("./controllers/comments");

// 2. create a router
const router = (req, res) => {
  // 3. create a route
  if (req.url === "/comments" && req.method === "GET") {
    commentsController.getComments(req, res);
  } else if (req.url === "/comments" && req.method === "POST") {
    commentsController.createComment(req, res);
  } else {
    commentsController.notFound(req, res);
  }
};

// 4. export the router
module.exports = router;

// Path: controllers/comments.js
// Create a comments controller
// 1. import the comments model
// 2. import the comments view
// 3. create a controller
// 4. export the controller

// 1. import the comments model
const commentsModel = require("../models/comments");

// 2. import the comments view
const commentsView = require("../views/comments");

// 3. create a controller
const commentsController = {
  getComments: (req, res) => {
    // get all comments
    const comments = commentsModel.getComments();
    // render the comments
    const html = commentsView.render(comments);
    // respond to the client
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.end(html);
  },
  createComment: (req, res) => {
    // get the comment from the client
    let body = [];}
    