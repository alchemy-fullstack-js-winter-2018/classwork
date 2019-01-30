const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
const Chance = require('chance');
const chance = new Chance();

const DEFAULT_TOTAL_USERS = 10;
const DEFAULT_TOTAL_TWEETS = 1000;

module.exports = ({ totalUsers = DEFAULT_TOTAL_USERS, totalTweets = DEFAULT_TOTAL_TWEETS }) => {
  return Promise.all(
    [...Array(totalUsers)].map((ele, i) => User.create({ email: `seed${i}@test.com`, password: 'password' }))
  )
    .then(users => {
      return Promise.all(
        [...Array(totalTweets)].map(() => {
          return Tweet.create({
            handle: chance.pickone(users)._id,
            text: chance.sentence()
          });
        })
      );
    });
};
