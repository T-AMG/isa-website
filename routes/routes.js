const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "ISA || Institut Supérieur des Affaires de Yaoundé",
  });
});

module.exports = router;
