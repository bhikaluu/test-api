const bodyParse = require('body-parser')
const express = require('express');

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');

var app = express();
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
  Todo.find().then((result)=>{
    res.send({result})
  }).catch((err)=>{
    res.status(400).send(err);
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

app.listen(3000,()=>{
  console.log('starting app');
})
module.exports={
  app
}
