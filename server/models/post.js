// import node modules
const mongoose = require('mongoose');

// define a schema
const PostModelSchema = new mongoose.Schema ({
  creator_id    : String,
  creator_name  : String,
  content       : String,
});

// compile model from schema
module.exports = mongoose.model('PostModel', PostModelSchema);
