var express = require('express'),
    params = require('express-params');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('public/index.html');
});



module.exports = router;
