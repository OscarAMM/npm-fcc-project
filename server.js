var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); 

app.use(express.static('public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/api/hello', function(req, res){
    res.json({
        greetings: "Hello"
    });
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));