var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Post: Nos Presentamos. */
router.get('/1', function(req, res, next) {
  res.render('1-Presentacion');
});

module.exports = router;
