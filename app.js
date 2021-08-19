require("dotenv").config();
const { config } = require("dotenv");
const express = require("express");
var path = require("path");

const routes = require("./routes/routes");

const app = express();

const port = process.env.PORT || 3000;

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// Web sites routes
app.use("/", routes);
app.listen(port, () => {
  console.log(`Application Started at port: ${port}...`);
});
