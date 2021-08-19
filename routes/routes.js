const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "ISA || Institut Supérieur des Affaires de Yaoundé",
  });
});
router.get("/administration", (req, res) => {
  res.render("administration", {
    title: "ISA || Admnistration",
    page_title: "L'Institut Supérieur des Affaires de Yaoundé",
  });
});
router.get("/mot-fondateur", (req, res) => {
  res.render("mot-fondateur", {
    title: "ISA || Mot du Fondateur",
    page_title: "L'Institut Supérieur des Affaires de Yaoundé",
  });
});
router.get("/offre-emplois", (req, res) => {
  res.render("offre-emplois", {
    title: "ISA || Offres d'emplois ISA Yaoundé",
    page_title: "L'Institut Supérieur des Affaires de Yaoundé",
  });
});

router.get("/contact-us", (req, res) => {
  res.render("contact-us", {
    title: "ISA || Contactez-Nous",
    page_title: "Contactez Nous",
  });
});
router.get("/application", (req, res) => {
  res.render("application", {
    title: "ISA || Candidatures Spontannée",
    page_title: "L'Institut Supérieur des Affaires de Yaoundé",
  });
});

router.get("/offre-formation", (req, res) => {
  res.render("offre-formation", {
    title: "ISA || Offre de Formations",
    page_title: "Nos Formations",
  });
});
module.exports = router;
