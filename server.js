var express = require('express');
var app = express();
app.get("/home",function(re,res){
  res.end("mot con vit");
});
app.get("/",function(re,res){
  res.end("hai con heo");
});
app.listen(3000);