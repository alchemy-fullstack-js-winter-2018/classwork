# HTTP

## create server

* use `http.createServer` to create a new http server
* on each new request `console.log` "request incoming!"
* `listen` on port 7890

## respond from server

* use `http.createServer` to create a new http server
* respond to each request with "<html><body>Thanks for visiting!</body></html>"
  * HINT: set your content type `res.setHeader('Content-Type', 'text/html')
* `listen` on port 7890

## respond based on path

* use `http.createServer` to create a new http server
* respond to the following paths
  * `/birthday` -> "Happy Birthday"
  * `/tomorrow` -> "Tomorrow, Tomorrow"
  * BONUS: `/birthday/tomorrow` -> "Tomorrow is your birthday"
* NOTES:
  * get the url with `req.url`
  * use `url.parse` to parse the url
  * get the pathname from the parsed url with `.pathname`

## server and app

* Create an `app.js` file
  * export an http listener function (`(req, res) => {}`)
  * respond to `/tester` with "testing123"
* create a `server.js` file
  * `const app = require('./lib/app')`
  * use `createServer` to create an http server with app
  * use `listen` to start server on a port
* tests
  * use `supertest` to to test your app

## json app

* Create an `app.js` file
  * export an http listener function (`(req, res) => {}`)
  * respond to `/tester` with `{ testing: 123 }`
  * HINT: set content type
* create a `server.js` file
  * `const app = require('./lib/app')`
  * use `createServer` to create an http server with app
  * use `listen` to start server on a port
* tests
  * use `supertest` to to test your app

## Query Strings

* Create an `app.js` file
  * export an http listener function (`(req, res) => {}`)
  * respond to `/you?name=ryan` with ```{ text: `hi there ${name}` }```
    * NOTE: name is variable.
* create a `server.js` file
  * `const app = require('./lib/app')`
  * use `createServer` to create an http server with app
  * use `listen` to start server on a port
* tests
  * use `supertest` to to test your app

## POSTing data

* Create an `app.js` file
  * export an http listener function (`(req, res) => {}`)
  * respond to a POST request on `/note`
    * expect JSON data like `{ text: 'This is a note' }`
    * save the note in a `const notes = {}` object declared outside your listener
* create a `bodyParser.js` file
  * export a function that takes a `req` and returns a promise
  * the promise should resolve if the `req` content type is not json
  * the promise should resolve with parsed json
    * user `req.on` to listen for `data` events
    * append each chunk of data onto a body string
    * after the `end` event parse the body string into json
* create a `server.js` file
  * `const app = require('./lib/app')`
  * use `createServer` to create an http server with app
  * use `listen` to start server on a port
* tests
  * use `supertest` to to test your app
  * unit test your `bodyParser.js`
    * HINT req is an EventEmitter. make a fake req by creating an EventEmitter instance

## rick and morty characters

* use `http.createServer` to create a new http server
* respond to the following paths
  * `/character/:ID`
    * grab the id from the path
    * make a request to the rick and morty api using `superagent` (get a character by ID)
    * respond with the name, status, and species of the character as json
    * HINT: set the content type

## Rick and Morty notes

* create an `app.js` file
  * `GET /characters` return HTML that displays a list of characters
    * BONUS: handle filtering with a query string `/characters?status=alive`
  * `POST /characters` takes `{ characterId: 1234, note: 'My favorite character' }`
    * save the note to a notes object. The key should be the characterId and the value
      should be an array of notes. (`const notes = { 1234: ['My favorite character']}`)
    * BONUS: make this functionality into a class and create tests around it.
  * `GET /characters/1234` return HTML that displays a character and all notes about them
  * BONUS: use `fsPromise.readFile` to read your HTML from a file instead
    of writing it in your js file
  * BONUS: how could you make a form for your POST?
    * HINT: use form actions and content-type `application/x-www-form-urlencoded`
      or add JavaScript and `fetch`.
* create a `bodyParser.js` file
* create a `server.js` file
