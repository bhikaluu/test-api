const bodyParse = require('body-parser')
const express = require('express');

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');

var app = express();
app.use(bodyParse.json());
app.post('/todo',(req,res)=>{
  var todo =new Todo({
    text:req.body.text
  });
  todo.save().then((result)=>{
    res.send(result);
  }).catch((e)=>{
    res.status(400).send(e);
  })
})

app.listen(3000,()=>{
  console.log('starting app');
})
module.exports={
  app
}
