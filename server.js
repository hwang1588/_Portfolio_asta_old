const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', function(req,res){
    res.render('index.html', {
        title: 'KMK',
        length: 5
    })
});

app.get('/grs/api.dws', function(req, res) {
    const { q } = req.query;
    res.set('Content-Type', 'text/plain');
    if (q === 'totalcoins') res.send('3000000000.0000');
    else if (q === 'circulating') res.send('102636881.0000');
    else res.send();
});

app.get('/bmp/api.dws', function(req, res) {
    const { q } = req.query;
    res.set('Content-Type', 'text/plain');
    if (q === 'totalcoins') res.send('10000000000.0000');
    else if (q === 'circulating') res.send('500000000.0000');
    else res.send();
});

app.set('views', __dirname + '/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static(__dirname));
app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('img'));
app.use(express.static('js'));
app.use(express.static('lib'));
app.use(express.static('video'));




app.listen(3000, function(){
    console.log(' listen 3000.....');
});

/*
function send404Message(response){
    response.writeHead(404, {"Content-Type":"text/plain"});
    response.write("404 ERROR...");
    response.end();
}

function onRequest(request, response){
    if(request.method == 'GET' && request.url =='/'){
        response.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }else{
        send404Message(response);
    }
}



http.createServer(onRequest).listen(3000);
console.log("server started...");
*/
