var express = require("express");
var app = express();
var port = process.env.PORT || 80;
var mongoose = require('mongoose');
mongoose.connect('mongodb://leo:leo@ds059306.mlab.com:59306/leoallenxyz');

//body-parser stuff
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
var methodOverride = require('method-override');
app.use(methodOverride());


app.use(express.static('app'));

var routes = require('./routes/index.js');



app.listen(port, function(){
  console.log("server running");
});







//applying the routes

app.use('/', routes);
