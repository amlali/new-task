var User=require('./models/user');
var express = require('express')
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
require('./router')(app);
var port=3000||process.env.PORT;

app.listen(port,function () {
    console.log(port);
    
});
