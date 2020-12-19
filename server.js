//JShint ESversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me @: nonplayablechar@yourmail.companyname.com");
});

app.get("/about", function (req, res) {
  res.send("<h1>I'm NPC-7</h1><p>\"Your future developer 😀\"</p");
});

app.get("/hobbies", function (req, res) {
  res.send("<h1>My Hobbies</h1><ul><li>Gaming</li><li>Watching Animes</li><li>Sleeping</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
