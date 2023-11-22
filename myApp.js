let express = require("express");
let app = express();

console.log("Hello World");

app.get("/", function (req, res) {
  res.send("Hellow Express");
});

module.exports = app;
