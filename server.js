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
/**Project challenge one***/
app.get('/api/timestamp/:date?', function (req, res) {
    var utc = new Date().toUTCString();
    var unix = new Date().valueOf();
    var parameter = req.params.date;
    console.log(req.params.date);
    var unix_format = /\d{5,}/;

    if (!req.params.date) {
        res.json({
            unix: unix,
            utc: utc
        });
    } else {
        var date_string = parseInt(req.params.date);
        var string_date = req.params.date;
        var verification = new Date(string_date).toUTCString();
        var integer_date_unix = new Date(string_date).valueOf();
        console.log(verification);
        console.log(date_string);
        if (verification != "Invalid Date") {
            //var date_integer = parseInt(req.params.date);
            res.json({
                unix: integer_date_unix,
                utc: verification,
            });
        } else if(unix_format.test(date_string)) {
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