const mongoose = require('mongoose');
const userScema = new mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model('User', userScema);
