var express = require('express');
var app = express();

app.use(express.static('www'));

app.listen(3002, function(){
    console.log('running');
});
