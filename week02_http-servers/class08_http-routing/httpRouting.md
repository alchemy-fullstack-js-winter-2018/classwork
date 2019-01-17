# HTTP Routing

* Copy over your simple-database files into
  `lib/models` and `test/models`

## people

* create a people rest API
* use simple-database to save people
* a person is has name, age, and favorite color
* `POST /people` creates a new person and sends
  back json
* `GET /people` returns a list of people
* `GET /people/:id` returns a person with :id
* `PUT /people/:id` updates a person with :id
  and returns the update
* `DELETE /people/:id` deletes a person with
  :id and returns the delete count

## routing people

* split out routing logic into
  `lib/routing/people.js`
* your exported function should take req and
  res.
  * attach the body to the req
    `req.body = body`
* BONUS: can you improve your people router?
  * HINT:
    * create a function for each method
      (post, get, put, delete).
    * create an object where the method name
      is the key and the function is the value
    * grab the method from the object using
      `methods[req.method.toLowerCase()]`
    * invoke method with req and res

## Not found

* create a `lib/routing/notFound.js` function
* your exported function should take req and
  res.
* set the status code to 404
* respond with "Not Found"
* Use the `notFound` function in your people
  api (when your don't support a route)

## tasks

* add a new tasks resource to your API
* a task has a description and a title
* create a new task model `lib/models/task.js`
* create a new task router `lib/routes/task.js`
* `POST /tasks` creates a new task and sends
  back json
* `GET /tasks` returns a list of tasks
* `GET /tasks/:id` returns a task with :id
* `PUT /tasks/:id` updates a task with :id
  and returns the update
* `DELETE /tasks/:id` deletes a task with
  :id and returns the delete count
* conditionally route to tasks or people

## Add another resource

* add another resource (e.g. toys, restaurants,
  books, etc.)

## add a favorite character to your people

* people now have a favorite star wars character
* when a person is created via `POST` a
  `favoriteCharacterId` will be sent:
  *
```js
{
  name: 'Uncle Bob',
  age: 100, favoriteColor: 'red', favoriteCharacterId: 1
}
```
* look up the favoriteCharacter with the star
  wars api [https://swapi.co/](https://swapi.co/)
  * HINT: make a service like the rickAndMortyApi.js
* save the favoriteCharacter along with the
  person (only store name, height, mass, hairColor, birthYear)
```js
{
  name: 'Uncle Bob',
  age: 100, favoriteColor: 'red', favoriteCharacterId: 1
  favoriteCharacter: {
	  name: 'Luke Skywalker',
	  height: '172',
	  mass: '77',
	  hairColor: 'blond',
	  birthYear: '19BBY'
  }
}
```
* when a person is updated via `PUT` update the favoriteCharacter also
  * BONUS: only make a new api request if the favoriteCharacter changed
