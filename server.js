/* requires */
// express
var express = require('express');
// path
var path = require('path');
// module 3
var module3 = require('./modules/module3');
// module 2
var module2 = require('./modules/module2');
// module 1
var module1 = require('./modules/module1');

//* globals */
// app
var app = express();
// port
var port = 3001;

//use
app.use( express.static ( 'public'));


// base get
app.get('/', function(req,res){
  //  console.log( path );
    res.sendFile ( path.resolve( 'public/views/index.html') );
});

app.get('/module3', function(req,res){
    // send this? module3(module1(100, 1000000), module2);
      res.send( '/module3 is working' );
  });
 


// listen
app.listen(port,function(){
    //console.log('Is port working ?');
    
});