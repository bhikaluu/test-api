const  mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp'||'mongodb://arun:arun@ds221258.mlab.com:21258/data');

module.exports={
  mongoose
}
