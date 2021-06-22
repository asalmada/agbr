var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* GET privacy-policy page. */
router.get("/privacy-policy", function (req, res, next) {
  res.render("privacy");
});

module.exports = router;
