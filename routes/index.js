var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../app/index.html'));
});

router.get('/blog', function(req,res){
  res.sendFile(path.join(__dirname, '../app/blog.html'));
});

router.get('/admin', function(req,res){
  res.sendFile(path.join(__dirname, '../app/admin.html'));
});



module.exports = router;
