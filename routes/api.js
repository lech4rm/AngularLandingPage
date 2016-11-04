var express = require('express');
var router = express.Router();
var path = require('path');
var Blog = require('../models/Blog.model.js');

// BLOG API

router.get('/blog', function(req , res){
  Blog.find(function(err, data){
    if (err)
    res.send(err);
      res.json(data);

  });
});

router.post('/blog' , function(req , res){
  Blog.create({
    title : req.body.title,
    tags : req.body.tags,
    post : req.body.post,
    category : req.body.category,
  }, function(err , data){
    if(err){
      res.send(err);
    }
    else{
      Blog.find(function(err, data){
        if(err){
          res.send(err);
        }
        else{
          console.log('logged to database');
          res.redirect('/blog/admin');
        }
      });
    }
  });
});

router.get('/blog/post/:title', function(req,res){
  var title_id = req.params.title.replace(/-/g, " ");
  Blog.findOne({ title : title_id }, function(err, data){
    if (err){
      res.send(err);
    }
    else{
      res.json(data);
      }

  });
});

router.delete('/blog/:post_id', function(req, res){
  Blog.remove({
    _id : req.params.post_id
  }, function(err, data){
    if(err){
      res.send(err);
    }
    else{
      Blog.find(function(err, data){
        if(err){
          res.send(err);
        }
        else{
          console.log('deleted from database');
          res.json(data);
        }
      });
    }
  });
});



module.exports = router;
