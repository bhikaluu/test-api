const bodyParse = require('body-parser')
const express = require('express');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');

var app = express();

const port = process.argv.PORT||3000;
app.use(bodyParse.json());
app.post('/todos',(req,res)=>{
  var todo =new Todo({
    text:req.body.text
  });
  todo.save().then((result)=>{
    res.send(result);
  }).catch((e)=>{
    res.status(400).send(e);
  })
})
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos})
  }).catch((err)=>{
    res.status(400).send(err);
  })
})

app.delete('/todos/:id',(req,res)=>{
  var id= req.params.id;
  if(!ObjectID.isValid(id)){
      console.log('haha');
    return  res.status(400).send();

  }
  Todo.findByIdAndRemove(id).then((result)=>{
    if(!result){
      res.send('delete unsuccess')
    }
    res.send('delete successful');
  })

})

app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
   var body = _.pick(req.body,['text','com']);
   if(body.com){
     body.completedAt='updated'
   }
   else{
     body.com=false;
     body.completedAt=null;
   }
   Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((result)=>{
     if(!result){
       res.status(404).send();
     }
     res.status(200).send(result);
   })
})

app.get('/todos/:id',(req,res)=>{

  var id = req.params.id;

  Todo.find({
    _id:id
  }).then((result)=>{
    if(!result){
      return res.status(404).send();
    }
    res.send(result);

  }).catch((err)=>{
    res.status(400).send();
  })

});

app.listen(port,()=>{
  console.log('starting app');
})
module.exports={
  app
}
