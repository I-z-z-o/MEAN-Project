
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({


  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }


});

// Plugin mongoose-unique-validator for unique-check (npm install --save mongoose-unique-validator)
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
