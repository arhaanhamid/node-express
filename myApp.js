let express = require("express");
let app = express();
require("dotenv").config();

console.log("Hello World");

//middleware function using request, response and next()
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

//middleware function used for accessing static folder/files
app.use("/public", express.static(__dirname + "/public"));

//api request on route '/string' using method 'GET' to simply return a simple string
app.get("/string", function (req, res) {
  res.send("Hello Express");
});

//api request on route '/' using method 'GET' to return an html page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//api request on route '/json' using method 'GET' to return json object depending on env variable
app.get("/json", function (req, res) {
  let data = { message: "Hello json" };
  process.env.MESSAGE_STYLE === "uppercase"
    ? (data.message = data.message.toUpperCase())
    : "";
  res.json(data);
});

//api route on "/now" and using middleware chainings to get current time
app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.send({ time: req.time });
  }
);

//api route to using params
app.get("/:word/echo", function (req, res) {
  res.send({ echo: req.params.word });
});

app
  .route("/name")
  .get(function (req, res) {
    res.send({ name: req.query.firstname + " " + req.query.lastname });
  })
  .post(function (req, res) {});

module.exports = app;
