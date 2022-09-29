const mongoose = require('mongoose');

/**
 * Expenses model
 */
const accountCategorySchema = mongoose.Schema({
  title: {type: String, required: true},
  icon: {type: String, required: false},
  color: {type: String, required: false},
  creator: {type: mongoose.Types.ObjectId, ref:"User" , required: false}
});

module.exports = mongoose.model('AccountCategory', accountCategorySchema)
