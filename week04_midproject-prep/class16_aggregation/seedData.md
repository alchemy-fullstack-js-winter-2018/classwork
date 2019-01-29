# Seed Data

To kick off a production environment and make testing easier, it's often necessary
to seed data into our database. We'll write a file that we can use to seed test and
production data.

## Create a Tweet model

* Create a `lib/models/Tweet.js` file
  * tweets have a handle String and a text String
* bring over `lib/utils/connect.js`

## create a seedData.js

* create a `test/seedData.js` file
* export a function that creates 100 tweets and returns a promise that resolves when the
  tweets are created
  * `npm i chance`
    * see the documentation here: [https://chancejs.com/](https://chancejs.com/)
  * `const Chance = require('chance');`
  * `const chance = new Chance()`
  * create an array of length 100 `[...Array(100)]`
  * use `.map` to iterate over the array and use chance and `Tweet.create`
    * `arr.map(() => Tweet.create({ handle: chance.name(), text: chance.sentence() }))`
  * use `Promise.all` to wait for all tweets to be created

## Create a seedData script

* create a `seed.js` at the root of your project
* `const seedData = require('./test/seedData.js')`
* invoke the `seedData` function and `then` `console.log` "done"
* create a `seed` script in your `package.json` that `node seed.js`
* run `npm run seed` and check out Robo 3T

## Create a User model

* create a `lib/models/User.js` base it on the one from `auth-be`
* update `test/seedData.js` to now create 5 users before creating tweets
  * create an array of users to create
    `const users = [{ email: 'test@test.com', password: 'password' }];`
  * use `.map` to iterate over `users` and `User.create` for each one
  * use `Promise.all` to wait for all users to be created

## Update Tweets model so handle references a user

* updated your `tweetSchema` so `handle` references user
* updated `test/seedData.js` to use the 5 created users to create tweets
  * `arr.map(() => Tweet.create({ handle: chance.pickone(users)._id, text: chance.sentence() }))`
