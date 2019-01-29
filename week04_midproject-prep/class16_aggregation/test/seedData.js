const Tweet = require('../lib/models/Tweet');
const User = require('../lib/models/User');
const Chance = require('chance');
const chance = new Chance();

module.exports = () => {
  const users = [{ email: 'test@test.com' }, { email: 'hi@test.com' }, { email: 'there@test.com' }];
  return Promise.all(users.map(user => User.create(user)))
    .then(createdUsers => {
      return Promise.all([...Array(100)].map(() => Tweet.create({
        handle: chance.pickone(createdUsers)._id,
        text: chance.sentence()
      })));
    });
};
