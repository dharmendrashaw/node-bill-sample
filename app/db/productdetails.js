const mongoose = require('mongoose');

const productschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  pid: {
    type: String,
    unique: true,
    required: true,
  },
});

const productdata = mongoose.model('productlist', productschema);
module.exports = productdata;
