const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
  },
  quantity: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: [true, 'An image is required.'],
  },
});

module.exports = mongoose.model('Product', ProductSchema);
