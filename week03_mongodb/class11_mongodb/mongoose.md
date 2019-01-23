# Mongoose

## First mongoose model

* create a `mongoosePlayground.js`
* `require` mongoose
* `mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true })`
* create a `tweetSchema`

```js
const tweetSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
```

* create a `Tweet` model

```js
const Tweet = mongoose.model('Tweet', tweetSchema);
```

* Create a new tweet

```js
Tweet
  .create({ handle: 'ryan', text: 'my first tweet' })
  .then(createdTweet => console.log(createdTweet));
```

* Use Robo 3T to see your tweet

## Query a model

* Query with `find`

```js
Tweet
  .find()
  .then(tweets => console.log(tweets));
```

* Query with `findById`

```js
Tweet
  .create({ handle: 'ryan', text: 'my first tweet' })
  .then(createdTweet => {
    return Tweet.findById(createdTweet._id)
  })
  .then(foundTweet => console.log(foundTweet));
```

## Update a model

* Update a tweet

```js
Tweet
  .create({ handle: 'ryan', text: 'my first tweet' })
  .then(createdTweet => {
    return Tweet.findByIdAndUpdate(createdTweet._id, { text: 'hi there' })
  })
  .then(updatedTweet => console.log(updatedTweet));
```

* look at what is printed and compare to Robo 3T
* try updating again

```js
Tweet
  .create({ handle: 'ryan', text: 'my first tweet' })
  .then(createdTweet => {
    return Tweet.findByIdAndUpdate(createdTweet._id, { text: 'hi there' },  { new: true })
  })
  .then(updatedTweet => console.log(updatedTweet));
```

* whats the difference?

## Delete

* delete  a tweet
* get an id from Robo 3T

```js
Tweet
  .findByIdAndDelete(FOUND_ID)
  .then(deleted => console.log(deleted))
```

## Mongoose connector

* install dotenv `npm i dotenv`
* create a `.env` file and put your `MONGODB_URI` in it
  * `MONGODB_URI=mongodb://127.0.0.1:27017/DATABASE_NAME`
* create a `lib/utils/connect.js`
* export a function that takes a `dbUri`
  * `dbUri` should default to `process.env.MONGODB_URI`
* connect to MongoDB
  * use `mongoose.connect` to connect to mongodb
* listen to `error` events
  * `console.log` that an error occurred
* listen to `open` events
  * `console.log` that the connection is opened and the uri
  * BONUS: redact username/password from the uri before printing
    * if the mongoDB server is secured it will have a username/password
      `mongodb://username:password@mongodb://HOST:PORT/DATABASE_NAME`
* listen to `close` events
  * `console.log` that the connection closed

## Integrate into an express app

* create an express application
  * create an `lib/app.js`
  * create a `server.js`
    * configure your environment with dotenv (`require('dotenv').config()`)
    * connect to MongoDB (`require('./lib/utils/connect')()`)
* create a mongoose model
  * create a `lib/models/Tweet.js` file
    * create a new `tweetSchema`
    * create and export a `Tweet` model
* create your `lib/routes/tweets.js` routes
  * `require` your `Tweet` model
  * create a REST api for tweets
    * `POST` - `Tweet.create`
    * `GET` - `Tweet.find`
    * `GET` - `Tweet.findById`
    * `PATCH` - `Tweet.findByIdAndUpdate`
    * `DELETE` - `Tweet.findByIdAndDelete`
* BONUS:
  * add tags
    * tags is a String enum of `['code', 'JavaScript', 'alchemy']`
    * [https://mongoosejs.com/docs/schematypes.html#strings](https://mongoosejs.com/docs/schematypes.html#strings)

## Create a User resource

* create a mongoose model
  * create a `lib/models/User.js` file
    * create a new `userSchema`
      * Users have a handle, name, and email
    * create and export a `User` model
* create your `lib/routes/users.js` routes
  * `require` your `User` model
  * create a REST api for users
    * `POST` - `User.create`
    * `GET` - `User.find`
    * `GET` - `User.findById`
    * `PATCH` - `User.findByIdAndUpdate`
    * `DELETE` - `User.findByIdAndDelete`

## Create Tweets/User relationship

Tweets should be associated with a User. In a SQL style database we use a join, with mongoose
we can use a `populate` to accomplish the same goal.
[https://mongoosejs.com/docs/populate.html](https://mongoosejs.com/docs/populate.html)

* Update the `tweetSchema`
  * `handle` should reference the `User` model
    * `{ type: Schema.Types.ObjectId, ref: 'User' }`
* Update the tweets routes
  * use `populate` to fetch the user information

## Select only a subsection of properties

* Update your tweets routes to return only the _id, handle, text, and tags
  * **do not** return the user's _id, __v, name or email
  * **do not** return the the __v
  * see [https://mongoosejs.com/docs/api.html#query_Query-select](https://mongoosejs.com/docs/api.html#query_Query-select)

## Check mongo connection express middleware

* create a `lib/middleware/connection.js`
* require mongoose
* require the mongoose state object `const state = require('mongoose/lib/connection/state');`
* export a middleware function `(req, res, next) => {}`
  * get the current `mongoose.connection.readyState` from mongoose
  * if the `readyState` is `state.connected` or `state.connecting`
    * invoke next, there is no issue
  * otherwise
    * create a `new HttpError` with code 500 and message "Mongo not connected"
    * invoke next with the error

## Add a random tweet endpoint

* Use the Ron Swanson middleware to create a random tweet
* change your `POST /tweets` route to now accept a query `?random=true`
  * if the query is present create a tweet with a random quote
    * `.post('/tweet', ronSwanson, (req, res) => {})`
