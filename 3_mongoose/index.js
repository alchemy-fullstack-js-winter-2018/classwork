const mongoose = require('mongoose');
const { Post, User } = require('./models');

mongoose.connect('mongodb://172.17.0.2:27017/agg', { useNewUrlParser: true, useCreateIndex: true })

// mongoose looks up a Post in mongodb
// mongodb returns a document
// mongoose then makes a model out of the document
// -> new Post(documentFromMongo)
// -> { _id: '1234', .... }

console.log(Post)

const agg = [
  {
    $lookup: {
      from: 'comments',
      localField: '_id',
      foreignField: 'post',
      as: 'commentsOnPost'
    }
  }, {
    $unwind: {
      path: '$commentsOnPost'
    }
  }, {
    $group: {
      _id: '$user',
      commentCount: {
        $sum: 1
      }
    }
  }, {
    $sort: {
      commentCount: -1
    }
  }, {
    $limit: 10
  }, {
    $lookup: {
      from: 'users',
      localField: '_id',
      foreignField: '_id',
      as: 'user'
    }
  },
  {
    $unwind: { path: '$user' }
  },
  {
    $project: {
      commentCount: true,
      username: '$user.username'
    }
  }
];

// Post
//   .aggregate(agg)
//   .then(console.log)

// User
//   .findOne()
//   .then(user => {
//     return Promise.all([
//       Promise.resolve(user),
//       Post.find({ user: user._id })
//     ])
//   })
//   .then(([user, posts]) => {
//     console.log(user)
//     console.log(posts);
//   });


// Post
//   .findOne()
//   .populate('user')
//   .lean()
//   .then(console.log)

// Post
//   .findOne()
//   .lean()
//   .then(doc => {
//     console.log({ ...doc })
//   })

// https://docs.mongodb.com/manual/reference/operator/query/
// Post
//   .find({
//     user: { $ne: '5c53e5700e24bc2b7d761b05' }
//   })

// Post.find({
//   photoUrl: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   user: '5c53e5700e24bc2b7d761af8'
// })
//   .then(console.log)

// Post.find()
//   .where('photoUrl')
//   .equals('https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
//   .where('user')
//   .equals('5c53e5700e24bc2b7d761af8')
//   .then(console.log)
