//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

var id = new ObjectID();
console.log(id)


const url = 'mongodb://localhost:27017';

const dbName='myData';

MongoClient.connect(url,(err, client)=>{

  const main_col=client.db(dbName);
  const col = main_col.collection('firstcollection');


  if(err){
    return console.log(err);
  }
  console.log('Connected to Server');

  main_col.collection('myuser_collections').insert({

     name:'arun',
     age:23

  },(err,result)=>{
    if(err){
      return console.log(err);
    }

  console.log(result.ops);
  })

col.insert({
        work:'to draw',
        finished:false
   },(err,result)=>{
     if(err){
       return console.log(err);
     }
     console.log(JSON.stringify(result.ops,undefined,2))
   })
  client.close();
})
