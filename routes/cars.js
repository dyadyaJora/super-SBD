var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('cars here');
});

router.get('/:id?', function(req, res, next) {
	res.send('Car №' + req.params.id);
});

module.exports = router;
