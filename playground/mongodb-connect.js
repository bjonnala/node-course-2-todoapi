const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log('Unable to connect to mongodb server'); 
    }
    console.log("Connected to mongodb server");
/*     db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if (err) {
            return console.log('Unable to insert todo',err); 
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    }); */

/*     db.collection('Users').insertOne({
        'name':'Raghu',
        'age':31,
        'location':'Lake forest'
    },function (err,result) {
        if (err) {
            return console.log('Unable to insert user',err); 
        }
        // result.ops is an array of documents inserted
        console.log(JSON.stringify(result.ops,undefined,2));
    }); */


    

    db.close();
});