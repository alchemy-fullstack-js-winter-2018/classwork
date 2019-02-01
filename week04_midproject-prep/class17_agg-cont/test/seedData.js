const Post = require('../lib/models/Post');
const User = require('../lib/models/User');
const Chance = require('chance');
const chance = new Chance();

const DEFAULT_TOTAL_USERS = 10;
const DEFAULT_TOTAL_POSTS = 1000;

module.exports = ({ totalUsers = DEFAULT_TOTAL_USERS, totalPosts = DEFAULT_TOTAL_POSTS }) => {
  return Promise.all(
    [...Array(totalUsers)].map((ele, i) => User.create({ username: `seed${i}`, password: 'password' }))
  )
    .then(users => {
      return Promise.all(
        [...Array(totalPosts)].map(() => {
          return Post.create({
            user: chance.pickone(users)._id,
            photoUrl: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            caption: chance.sentence()
          });
        })
      );
    });
};
