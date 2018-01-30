const express = require('express');
const bodyParser = require('body-parser');
const  mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/MyTestDataDb',()=>{
  console.log('connecting to mongodb server');
});
var Todo = mongoose.model('testdata',{
  text:String
})

app.post('/body',(req,res)=>{
  console.log(req.body);
  new Todo(
    req.body
  ).save().then((result)=>{
    res.send(result);
  })
})

app.get('/body',(req,res)=>{
  Todo.find().then((result)=>{
    res.send(result);
  })
})


app.listen(3000,()=>{
  console.log('listening at port 3000');
})

//
// var newTodo=new Todo({
//   text:'finding'
// })
//
// newTodo.save();
//
// Todo.find().then((result)=>{
//   console.log(result);
// })
