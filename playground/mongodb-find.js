const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log('Unable to connect to mongodb server'); 
    }
    console.log("Connected to mongodb server");


    /*db.collection('Todos').count().then((count)=>{
        console.log('Todos');
        console.log('Todos count ' + count);
      },(err)=>{
          console.log('Unable to fetch todos',err);
      }); */


      db.collection('Users').find({'name':'Raghu1'}).toArray().then((docs)=>{
        console.log('Users');
        console.log(docs);
      },(err)=>{
          console.log('Unable to fetch Users',err);
      }); 
    //db.close();
});