var express=require('express');
var path=require('path');
var app=express();

app.use(express.static(path.resolve(__dirname,'public')));

var port=8080;

var movies=[
 {
   id: 1,
   title: 'Suicide Squad',
   year: 2016
 },
 {
   id: 2,
   title: 'The Dark Knight',
   year: 2008
 },
 {
   id: 3,
   title: 'Willy Wonka & the Chocolate Factory',
   year: 1971
 },
 {
   id: 4,
   title: 'Star Wars: A New Hope',
   year: 1977
 },
 {
   id: 5,
   title: 'Star Wars: Empire Strikes Back',
   year: 1980
 },
 {
   id: 6,
   title: 'Star Wars: Return of the Jedi',
   year: 1983
 }
]


app.get('/api/movies',function(req,res){
  res.json(movies);
})

app.get('*',function(req,res){
  res.sendFile(`${__dirname}/public/index.html`);
})




app.listen(port,function(){
  console.log('Listening on ' + port);
})
