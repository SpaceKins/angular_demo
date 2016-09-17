var express=require('express');
var path=require('path');
var app=express();

var port=8080;


app.use(express.static(path.resolve(__dirname,'public')));

app.listen(port,function(){
  console.log('Listening on ' + port);
})
