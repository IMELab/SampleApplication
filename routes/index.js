var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'IMELab Sample Application' });
});

router.get('/uploader', function(req, res) {
  res.render('uploader', { title: 'Multipart Uploader' });
});

module.exports = router;
