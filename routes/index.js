var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'IMELab Sample Application' });
});

router.get('/uploader', function(req, res) {
  res.render('uploader', { title: 'Multipart Uploader' });
});

router.get('/doodle', function(req, res) {
  res.render('doodle', { title: 'Doodle on Canvas' });
});

module.exports = router;
