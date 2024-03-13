import express from "express";
// import library here

const app = express();

app.get("/", function (req, res) {
  res.send(`Hello node.js!`);
});

app.get("/rust", async function (req, res) {
  // use library

  res.send(/* send result here */);
});

app.listen(3000);
