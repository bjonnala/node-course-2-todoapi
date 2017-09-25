const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err) {
        return console.log('Unable to connect to mongodb server'); 
    }
    console.log("Connected to mongodb server");


  //findOneAndUpdate
  db.collection('Todos').findOneAndUpdate
   (
       {'_id':new ObjectID('59c553e394b76121641c4982')},
       {
           $set:{
               completed:true
           }
       },{
           returnOriginal:false
       }
    ).then((result)=>{
   console.log(result);
  });
   
    //db.close();
});