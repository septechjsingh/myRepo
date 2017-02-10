var express = require('express')
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.get('/helloWorld', function (req, res) {
    res.send('Hello World!')
});

app.post('/login', function (req, res) {
    var username = String(req.body.username);
    var password = String(req.body.password);

    if (username.toUpperCase() == "admin".toUpperCase() && password == "admin") {
        res.send(true);
    } else {
        res.send(false);
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
