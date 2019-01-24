# Bcrypt


We don't want to store clear text passwords in our database. In order to avoid storing
clear passwords we create a hash from the password string. We'll be using
[bcrypt](https://www.npmjs.com/package/bcryptjs) to do this.

## encrypt passwords

To encrypt a password we use `bcrypt.hash` which returns a promise.

* `npm i bcryptjs`
* create a `test/utils/hash.test.js` file
* `require('bcryptjs')`
* create a test `it('hashes a password', () => { }`
  * create a new password hash using `bcryptjs.hash('password', 10)`
  * `then` `expect(hashedPassword).toBeDefined()`
  * `console.log` the password

## encrypt another password

Strangely, if we encrypt the same password we get two different hashes.

* create a test `it('creates hashed passwords that are different', () => { }`
  * create a password hash using `bcryptjs.hash('password', 10)`
  * `then` create another hash using `bcryptjs.hash('password', 10)`
  * `then` `expect(hashedPassword1).not.toEqual(hashedPassword2)`
    * why aren't they equal?

## encrypt passwords with a given salt

If we provide a non-random salt we get the same hash. Is this bad?

* create a test `it('creates the same hash given the same salt', () => { }`
  * create a `const salt` constant
    * HINT: begin your salt with `$2b$10$` then 22 characters of your choice
  * create a password hash using `bcryptjs.hash('password', salt)`
  * `then` create another hash using `bcryptjs.hash('password', salt)`
  * `then` `expect(hashedPassword1).toEqual(hashedPassword2)`
    * why are they equal?

## compare hashes

Bcrypt is a one-way hash. This means the hash cannot be unhashed. We can still
check if a hash matches a string though.

* create a test `it('can compare hashes based on the same password')`
  * create a hash
  * `then` use `bcryptjs.compare` to compare the unhased string to the hash
  * `then` `expect(result).toBeTruthy()`

## extract hash into a function

* create a `lib/utils/hash.js` file
* create a `hash` function that takes a string and returns a promise that
  resolves with a hashed password.
* **DON'T FORGET TO WRITE A TEST FIRST**

## extract compare into a function

* create a `compare` function that takes a password string and hash and returns
  a promise that resolves to true if the password matches the hash otherwise
  false.
* **DON'T FORGET TO WRITE A TEST FIRST**
