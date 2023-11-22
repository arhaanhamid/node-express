import express from "express";
let app = express();

console.log("Hello World");
app.get("/", function (req, res) {
  res.send("Hello Express");
});

export default app;
