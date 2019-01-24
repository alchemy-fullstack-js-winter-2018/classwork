# User routes

We need to provide some custom non-REST routes for our user, like signup, signin, and verify.

* create a new `lib/routes/auth.js` file
  * setup a `Router()`
* create and setup `lib/app.js`
  * add `app.use('/auth', authRoute)`

## Signup

This is the route a user will hit when signing up for our service

* add a post request handler at `.post('/signup', (req, res, next) => {})`
  * destructure `email` and `password` off `req.body`
  * create a new user with `User.create` with email and password
    * `then` create an authToken with `user.authToken`
    * `then` respond with the user and token `res.send({ user, token })`
* **WRITE A TEST FIRST**

## Signin

* add a post request handler at `.post('/signin', (req, res, next) => {})`
  * destructure `email` and `password` off `req.body`
  * find a user by email `User.findOne({ email })`
    * `then` if there is a user and `user.compare(password)`
      * create an authToken with `user.authToken`
      * `then` respond with the user and token `res.send({ user, token })`
      * OTHERWISE: respond with 401 "Bad email or password"
* **WRITE A TEST FIRST**

## ensureUser middleware

We need to create middleware to check if a user is logged in. We know a user is logged in if
they pass a valid token as an `Authorization` header.

* create a function `findAuthToken` that returns a token
  * `findAuthToken` should read the "Authorization" header `req.get('Authorization')`
  * if the header is there it should remove the leading "Bearer " text (leaving just the token)
  * **WRITE A TEST FIRST**
* create a function `ensureAuth`
  * use `findAuthToken` to get a token
  * if there is not a token return (using next) a 401 "Token required" error
  * otherwise use `User.findByToken` to get the user
  * `then` set `req.user` to the user and invoke `next`
  * **WRITE A TEST FIRST**

## Verify

This route is used to verify a JWT. Ultimately it allows a user to stay logged in while
navigating from page to page in the app.

* add a get request handler at `.get('/verify', ensureAuth, (req, res, next) => {})`
  * respond with the user
    * NOTE: since you're using the `ensureAuth` middleware you can get the user from `req.user`
