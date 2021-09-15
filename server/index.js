const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const middleware = require("./middleware");
const connect = require("./db/connect");
const md5 = require("md5");
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/static", express.static("public"));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

let port = 3060;
app.listen(port);
console.log("api runnging on port " + port + ": ");
