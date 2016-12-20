var express = require('express');
var app = express();

app.get('/', function (req, res) {

    var userAgent = req.headers['user-agent'];
    var theSoftware = userAgent.split('(')[1].split(')')[0];
    
    var theInfo = {
        "ipaddress": req.headers['x-forwarded-for'],
        "language": req.headers['accept-language'],
        "software":theSoftware
    };

    res.send(theInfo);
});

app.listen(8080, function () {
  console.log('app listening on port 8080!');
});