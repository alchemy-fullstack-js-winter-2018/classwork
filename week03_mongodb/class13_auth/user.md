# User model

## Create a User model

* create `test/models/User.test.js` file
* create a `lib/models/User.js` file
* create a test `it('validates a good model', () => { }`
  * create a new user with `const user = new User({ email: 'test@test.com' });`
  * `expect(user.toJSON()).toEqual({ email: 'test@test.com' })`
* create your user model
  * users have an email and non-required passwordHash field
* create another test `it('has a required email', () => { }`
  * create a new user with `const user = new User({});`
  * validate the user with `const errors = user.validateSync().errors`
  * expect to get some errors
    * HINT: `console.log` errors and see what it looks like

## get a clear password on creating a new user

When we create a new user, we initially have to send in a clear, unencrypted, password.
We never want to store this unencrypted password in our database, but we want to be able
to pass an unencrypted password on user creation. We can do this by creating a "virtual"
field in our document. See here: [https://mongoosejs.com/docs/guide.html#virtuals](https://mongoosejs.com/docs/guide.html#virtuals).

* create a virtual "password" field in our userSchema with a setter
  * HINT: `userSchema.virtual('password).set(function(password) {})`
* on setting the password field store the clear password in a temporary property
  * HINT: `this._tempPassword = password`
* **WRITE A TEST FIRST**
  * create a test `it('stores a _tempPassword')`
    * create a user using `new User({ email, password })`
    * `expect(user._tempPassword).toEqual('password')`

## mongoose middleware

Mongoose middleware are functions that get executed before or after some database
event (e.g. before or after a document is saved). These are more typically called
pre and post hooks. [Middleware](https://mongoosejs.com/docs/middleware.html)

* create a hook `.pre('save', function(next) {});`
  * the hook should take the `this._tempPassword` and hash it (using the hashing module we created)
  * it should take the hashed password and store it as `this.passwordHash`
  * don't forget to invoke `next`
* **WRITE A TEST FIRST**
  * test that password hash is set after `user.save()`

## create a compare method

Mongoose allows us to add custom methods to our models. These allow us to add custom functionality
to our models. See [Methods](https://mongoosejs.com/docs/guide.html#methods)

* create a `compare` method on `userSchema`
  * `compare` should be a function that takes a password (in clear text)
  * `compare` should return true if the password matches `this.passwordHash`
  * HINT: use the compare function we created earlier
* **WRITE A TEST FIRST**
  * `const password = 'password'`
  * create a user `User.create({ email: 'test@test.com', password })`
  * then invoke the compare method (`user.compare`) with the password and expect true
  * invoke the compare method with a bad password and expect false

## findByToken

Mongoose allows us to create static methods. Unlike instance methods, which are about a particular
user, static methods apply to the User model. An example of a built in static method is `findById`
See [Statics](https://mongoosejs.com/docs/guide.html#statics).

* create a `findByToken` static method
  * `findByToken` is a function that takes a token
  * it should return a user by `untokenizing` the token
  * BONUS: mimic the other static methods like `findById` by returning a promise
* **WRITE A TEST FIRST**
  * create a user `User.create({ email: 'test@test.com', password: 'password' })`
  * `then` create a token with `tokenize`
  * `then` user `User.findByToken(token)`
  * `then` `expect(foundUser).toEquale({ email: 'test@test.com' ..... })`

## Remove passwordHash from user JSON representation

We don't want to send the passwordHash in API requests for our user. Its bad practice.
We can add a custom `toJSON` transformer to our `userSchema` to remove unwanted fields.
Unfortunately, mongoose provides very little documentation about this feature. See this
blog post though: [https://alexanderzeitler.com/articles/mongoose-tojson-toobject-transform-with-subdocuments/](https://alexanderzeitler.com/articles/mongoose-tojson-toobject-transform-with-subdocuments/)

* create a `toJSON` transform function
  * inside the transform `delete ret.__v` and `delete ret.passwordHash`
* **WRITE A TEST FIRST**

## authToken instance method

* create an instance method that returns a token for a user
  * the method takes no arguments
  * use `this.toJSON` to create JSON from a user instance
  * return `tokenize` the user instance JSON
