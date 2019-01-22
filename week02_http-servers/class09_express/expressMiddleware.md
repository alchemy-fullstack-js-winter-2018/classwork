# Express Middleware

Express middleware allows us to invoke functions between
a request coming in a a response going out. Middleware
is a function that takes three arguments `req`, `res`, and
`next`. It is applied with `app.use`

```js
app.use((req, res, next) => {
  console.log('Request Incoming!');
  next();
});
```

The `next` function should be invoked after your
middleware is done.

## Logger

Create logging middleware so we can keep track of the
requests that hit our server.

* Create and use a logging middleware in `lib/app.js`
* On every request `console.log` the requested method
* On every request `console.log` the requested pathname
* E.G. `GET /tweets`

## Logger with response code

Refactor our logging middleware so that the response
status code is included in the message

* Create and use a logging middleware in `lib/app.js`
* On every request `console.log` the requested method
* On every request `console.log` the requested pathname
* On every request `console.log` the response status code
* E.G. `GET /tweets [200]`

## Logger with metrics

Refactor our logging middleware so that the time until
response is printed

* Create and use a logging middleware in `lib/app.js`
* On every request `console.log` the requested method
* On every request `console.log` the requested pathname
* On every request `console.log` the response status code
* On every request `console.log` the response time
* E.G. `GET /tweets [200] - 2ms`
* HINT:
  * create middleware that `req.startAt = Date.now();`
  * create a second middleware where `const responseTime = Date.now() - req.startAt;`
  * Order matters!

## Not Found middleware

Create middleware to handle not found. This middleware can be added after
your routes. If none of your routes match, the not found middleware will
trigger

* create a `lib/middleware/notFound.js` file
* export a middleware function `(req, res, next) => {}`
* set the `res.status` to 404
* respond with "Not Found"

## Error handling

Create middleware to handle errors. This middleware has to be added after
all other middleware.

* create a `lib/middleware/error.js` file
* export an error middleware function `(err, req, res, next) => {}`
  * NOTE:  the error middleware has a different signature
* set the `res.status` to 500
* respond with `{ error: 'Internal Server Error' }`
* BONUS:
  * create a custom `HttpError` class
    * `HttpError` `extends` `Error`
    * `HttpError` takes a `code` and `message` in its constructor
    * inside your middleware check `if(err instanceof HttpError)`
      and if so use `err.code` and `err.message` for your status and
      `{ error: err.message }`.
  * `if(err.name === 'CastError' || err.name === 'ValidationError')`
    * if so status should be 400 and respond with the `{ error: err.message }`
  * `if(process.env.NODE_ENV !== 'production')`
    * respond with `{ error: err.message }`
    * `console.log(err)`

## Ron Swanson express middleware

Use the [https://ron-swanson-quotes.herokuapp.com/v2/quotes](https://ron-swanson-quotes.herokuapp.com/v2/quotes) API to get random quotes.

* create a `lib/services/ronSwansonApi.js`
  * export a function `getRandomQuote(n)` that returns an array of `n` random quotes
* create a `lib/middleware/ronSwanson.js`
  * use the `getRandomQuote` service to get **1** random quote
  * attach the random quote to `req.quote`
* create a new route `/random` that uses the `ronSwanson` middleware
  * `app.get('/random', ronSwanson, (req, res) => {})`
  * respond with the random quote
