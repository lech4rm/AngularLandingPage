var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var blogSchema = new Schema({
  title:{ type : String , required : true},
  tags: String,
  post: String,
  category: Number,
  msg_date : { type: Date, default: Date.now }
});



module.exports = mongoose.model('Blog', blogSchema);
