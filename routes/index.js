var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  require('dotenv').config(); // Load .env file
  const myVar = process.env.MY_VARIABLE;
  console.log("hereeeeeeeeeeeeeeee   " + myVar); // Prints 'some_value'
// server.js
console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); // 8626
  res.render('index', { title: 'santossh Express from santoh  code updated hereeeeeeeeeeeeee' + myVar });
});

module.exports = router;
