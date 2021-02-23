var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/api/hello', function (req, res) {
    res.json({
        greetings: "Hello"
    });
});
/**Option one***/

app.get('/api/timestamp/:date?', function (req, res) {
    var utc = new Date().toUTCString();
    var unix = new Date().valueOf();
    console.log(req.params.date)
    var unix_format = /\d{5,}/;
    
    if (!req.params.date) {
        res.json({
            unix: unix,
            utc: utc
        });
    } else {
        if(req.params.date != "Invalid Date" || unix_format.test(req.params.date)){
            var date_string = parseInt(req.params.date);
            console.log(date_string);
            res.json({
                unix: date_string,
                utc: new Date(date_string).toUTCString(),
            });
        }else{
            res.json({
                error: "Invalid Date"
            });
        }
    }
});
/**Option two**/

const port = 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));