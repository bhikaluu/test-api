var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
   text:{
     type:String,
   },
   com:{
     type:Boolean,
     default:false
   }
   ,
   completedAt:{
     type:String,
     default:null
   }
})
module.exports={
  Todo
}
