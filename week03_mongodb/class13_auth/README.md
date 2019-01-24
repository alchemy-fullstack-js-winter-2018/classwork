# User Auth

## Agenda

* Bcrypt
  * Use bcrypt to encrypt passwords
  * Use random salt to prevent common hacks
* JWT
  * Create a JWT to send to the client
* User Model
  * use `virtual` to create a hidden password field
  * create instance methods
  * create static methods
* User Routes
  * create signup, signin, verify

## Bcrypt

Bcrypt is a popular password encryption function created in 1999. Hashing with Bcrypt is one-way.
This means that you cannot decrypt a password once it has been encrypted.

We'll use bcrypt to encrypt a password before storing it in our database. By doing this, we secure
ourselves from the event that a hacker gains access to our database. In such an event, the hacker
would only gain access to hashed passwords, and not the plain text password.

### Comparing passwords

#### Compare hashes

One way to authenticate a user is to take a provided plain text password -> hash it -> compare
it to the hash saved in our database.

This strategy leaves us open to [Rainbow table](https://en.wikipedia.org/wiki/Rainbow_table)
attacks.

#### Salt

Salting a password means that we prepend or append a (salt) string to the password.

Salt is a way to prevent rainbow table attacks because it makes creating a table of known
passwords to hashes impossible without knowing the salt that was used.

Even with salt, we are still vulnerable to similar attacks. Imagine this situation:

1. A hacker gains access to our database.
1. They create an account with password 's3cret'
1. They look up all accounts with the same hash as their new account
1. All those accounts have the same password

To prevent this you can randomly generate salt which will make each hashed password unique.

## JWT

JSON web tokens are objects encoded with an app secret that is used to keep a user logged in.
