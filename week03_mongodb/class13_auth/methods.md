# Mongoose methods

## possibleTags Static method

* **Write Tests**
* create a `possibleTags` static method
  * `tweetsSchema.statics.possibleTags = function() {}`
  * returns a list of available tags
* create a new `/tweets/tags` route
  * return a list of possibleTags

## handle instance method

* **Write Tests**
* create a `handle` instance method
  * `tweetsSchema.methods.handle`
  * returns a tweets handle (user handle)
* create a new `/tweets/:id/handle` route
  * return a tweets handle `{ handle: HANDLE }`

## tweet updated at

* **Write Tests**
* update your `tweetSchema` to include `createdAt` and `updatedAt`
  * `createdAt` should default to the current time `Date.now()`
* create a `.pre('save', function(next) {})` middleware
  * inside the middleware update the `updatedAt` field with the current date
