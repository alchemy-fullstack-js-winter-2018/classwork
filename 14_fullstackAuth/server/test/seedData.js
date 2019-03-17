const Tweet = require('../lib/models/Tweet');
const chance = require('chance').Chance();

module.exports = async function seedData() {
  const tweets = [...Array(100)].map(() => ({
    handle: chance.pickone(['auth0|5c00c7c35b802c26c0998a15', 'auth0|5c00b0cde9f0262e937842c9']),
    text: chance.sentence()
  }));
  console.log(tweets);

  await Tweet.create(tweets);
};
