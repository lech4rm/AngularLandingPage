var express = require("express");
var app = express();
var port = process.env.PORT || 80;

app.listen(port, function(){
  console.log("server running");
});

app.use(express.static('app'));


app.get('/', function (req, res){
  res.sendFile(__dirname + '/app/index.html');
});
