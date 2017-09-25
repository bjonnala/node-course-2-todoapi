var express = require('express');
var bodyparser = require('body-parser');


var mongoose = require('./db/mongoose.js');
var todo = require('./models/todo.js');
var usermodel = require('./models/user.js');


var app = express();

app.use(bodyparser.json());

// Create todos
app.post('/todos',function (req,res) {

    var todoi = new todo.Todo({
       text : req.body.text
    });

    todoi.save().then(function (doc) {
        res.send(doc);
    },function (err) {
        res.status(400).send(err);
    });
});


app.listen(3000,function () {
    console.log('Started on port 3000');    
});




