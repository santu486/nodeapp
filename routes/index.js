var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express from santoh updated hereeeeeeeeeeeeeeee66666666666' });
});

module.exports = router;
