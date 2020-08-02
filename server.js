var express = require('express');

var app = express();
var path = require('path');

app.listen(3000, function(){
    console.log("Rodando na porta 3000");
})

app.use(express.static(__dirname + '/Public'));
app.use(express.static(__dirname + '/Server'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/Public/HTML/index.html'));
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname,'/Public/HTML/index.html'));
});