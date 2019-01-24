# JWT

JSON web tokens are a secure way to send authentication information.
Check out the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
docs.

## create a token

* create a `test/utils/token.js`
* create a test `it('can create a token', () => { })`
  * create a token with `jwt.sign({ payload: { hi: 'there' } }, 'secret');`
  * `expect` the token to be a string

## verify a token

* create a test `it('can verify a token', () => { })`
  * create a token
  * use `const body = jwt.verify(token, 'secret');`
  * `expect(body).toEqual({ payload: { hi: 'there' }, iat: expect.any(Number) })`
    * what is `iat`?

## verify a token with an expiration

* create a test `it('can verify a token with expiration', () => { })`
  * create a token
  * use `const body = jwt.verify(token, 'secret', { expiresIn: '1h' });`
  * `expect(body).toEqual({ payload: { hi: 'there' }, iat: expect.any(Number), exp: expect.any(Number) })`
    * what is `exp`?

## extract sign

* create a `lib/utils/token.js` file
* add an `AUTH_SECRET` to your `.env` file
* create a `tokenize` function that takes a payload and returns a token
  * use `jwt.sign` to create a token that expires in 24 hours
    * NOTE: user `process.env.AUTH_SECRET` as your secret
* **WRITE TESTS FIRST**
  * HINT: you'll need to `require('dotenv').config()` in your tests

## extract verify

* create a `untokenize` function that takes a token and returns a payload
  * use `jwt.verify` to get an object from a token
  * return just the payload
* **WRITE TESTS FIRST**
