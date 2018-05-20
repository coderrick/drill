'use strict';
var express = require('express');
var app = express();
var path = require('path');
var ip = require("ip");
var os = require('os');
  
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
    console.log('App listening on port 8080');
    console.log(ip.address());
});