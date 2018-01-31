const  mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const MONGODB_URI="mongodb://<Arun Katwal>:<arunkatwalmLab772772>@ds221148.mlab.com:21148/restdb"
mongoose.connect(MONGODB_URI||'mongodb://localhost:27017/TodoApp');

module.exports={
  mongoose
}
