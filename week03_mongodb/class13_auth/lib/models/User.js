const mongoose = require('mongoose');
const { hash, compare } = require('../utils/hash');
const { untokenize } = require('../../lib/utils/token');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true
  },
  passwordHash: String
});

userSchema.virtual('password').set(function(password) {
  this._tempPassword = password;
});

userSchema.pre('save', function(next) {
  hash(this._tempPassword)
    .then(hashedPassword => {
      this.passwordHash = hashedPassword;
      next();
    });
});

userSchema.methods.compare = function(password) {
  return compare(password, this.passwordHash);
};

userSchema.statics.findByToken = function(token) {
  // untokenize(token)
  return untokenize(token);
};

module.exports = mongoose.model('User', userSchema);
