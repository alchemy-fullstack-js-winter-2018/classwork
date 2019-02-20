const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  photoUrl: {
    type: String,
    required: true,
    select: false
  },
  caption: String,
  tags: String
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username required'],
    unique: true
  },
  profilePhotoUrl: String,
});

module.exports = {
  Post: mongoose.model('Post', postSchema),
  User: mongoose.model('User', userSchema)
};
