var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
app.set('port', (process.env.PORT || 5000));
app.get("/home",function(re,res){
  res.end("mot con vit");
});
app.get("/",function(re,res){
  res.end("hai con heo");
});
app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})