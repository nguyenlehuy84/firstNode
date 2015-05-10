var express = require('express');
var app = express();
app.get("/home",function(re,res){
  res.end("mot con vit");
});
app.listen(8000);