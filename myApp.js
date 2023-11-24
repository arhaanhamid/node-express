let express = require("express");
let app = express();
require("dotenv").config();

console.log("Hello World");

app.get("/string", function (req, res) {
  res.send("Hello Express");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  let data = { message: "Hello json" };
  process.env.MESSAGE_STYLE === "uppercase"
    ? (data.message = data.message.toUpperCase())
    : "";
  res.json(data);
});

// app.use(function (req, res, next) {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// });

module.exports = app;
