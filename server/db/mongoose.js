const  mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds221148.mlab.com:21148/restdb');

module.exports={
  mongoose
}
