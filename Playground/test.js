const express = require('express');

const {MongoClient,ObjectID}  = require('mongodb');

const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'MyTestData';

MongoClient.connect(url,(err,client)=>{
  const main_col = client.db(dbName);

  const col = main_col.collection('user_data')
     .find().count().then((result)=>{
         console.log(result)
    }).catch((err)=>{
      console.log(err);
    });



  });
