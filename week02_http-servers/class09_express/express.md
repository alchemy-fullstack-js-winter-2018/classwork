# Express

## Create an express app

Our first express app. Let's get a server running!

* `npm i express`
* `const express = require('express')`
* `const app = express()`
* use `listen` to start your app on port 7890

## Create a get route

Let's handle our first GET request.

* create a get route with `app.get`
* respond with "hi"

## Separate server and app

Start separating server and app. This allows us to test
app independent of starting our server.

* create a `lib/app.js`
  * `require` express and create a new app
  * `use` the express bodyParser `app.use(express.json())`
* create a `server.js`
  * `require` `app.js`
  * listen on port 7890

## Add routes

Let's build a small twitter clone. We separate routes into their
own file to keep our application small and manageable and keep
concerns separate.

* create a `lib/models/Tweet.js` file
  * export a `Store` instance
* create a `lib/routes/tweets.js` file
  * create a new router `require('express').Router()`
  * Tweets look like `{ handle: 'ryan', text: 'I am a tweet', _id: '1234' }`
  * create all CRUD routes
    * `POST /tweets`
    * `GET /tweets`
    * `GET /tweets/:id`
    * `PUT /tweets/:id`
    * `DELETE /tweets/:id`
* create a `lib/app.js`
  * `require('./routes/tweets')`
  * `use` the tweets route with `app.use`
* create a `server.js`

## Another resource

Let's add tags as another resource.

* create a `lib/models/Tag.js` file
  * export a `Store` instance
* create a `lib/routes/tags.js` file
  * create a new router `require('express').Router()`
  * tags look like `{ name: '#js', _id: '1234' }`
  * create all CRUD routes
    * `POST /tags`
    * `GET /tags`
    * `GET /tags/:id`
    * `PUT /tags/:id`
    * `DELETE /tags/:id`
* inside `lib/app.js`
  * `require('./routes/tags')`
  * `use` the tweets route with `app.use`
