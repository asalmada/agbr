var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { name: "Test", title: "XXX" });
});

module.exports = router;
