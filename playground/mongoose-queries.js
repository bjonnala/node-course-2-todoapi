var ObjectID = require('mongodb').ObjectID;
var mongoose = require('./../server/db/mongoose.js');
var todo =  require('./../server/models/todo.js');


/*var id = '59c95eccb2ff3b3140e9e68f';

if(!ObjectID.isValid(id))
{
   console.log('ID not found');
}*/

/*todo.Todo.find({
    _id:id
}).then(function (res) {
    console.log('Todos ',res);
}); // gives an array


todo.Todo.findOne({
    _id:id
}).then(function (res) {
    console.log('Todo ',res);
}); 


// find a doc by id
todo.Todo.findById(id).then(function (res) {
    if (!res) {
       return console.log('Id not found');  
    }
    console.log('Todo by id ',res);
}).catch(function (e) {
    console.log(e);
}) */



