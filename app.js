require("dotenv").config();
const { config } = require("dotenv");

const port = process.env.PORT || 3000;

const express = require("express");
var path = require("path");

const app = express();

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/*app.use(express.json); */
app.use(express.urlencoded({ extended: false }));

app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.listen(port, () => {
  console.log(`Application Started at port: ${port}...`);
});
