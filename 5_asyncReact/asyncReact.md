# Async react

We'll be using the Rick and Morty Api to display a character.
[https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/)

## Initialize react app

* create `webpack.config.js`, `src/index.js`, and `src/index.html`
* create a `src/components/App.js` file
  * `App.js` should render with an h1 title
* BONUS:
  * create a `src/components/header/Header.js`

## Character component

* create a `src/components/characters/Character.js`
* character takes a `character` object as a prop
  * `character` has a `name`, `status`, `species`, and `gender`
* Display character anyway you wish (it will be part of a list of Characters)

## Characters component

* create a `src/components/characters/Characters.js`
* characters displays a list of characters
  * hard code the list of characters your component will take.
    Use the rick and morty api to get a list of characters
* for each character create a `Character` component
* display the list of characters anyway you wish

## Add characters to App

* import and use `Characters` in `App.js`

## Extract Characters into a service

* create a `src/services/rickAndMortyApi.js`
* create and export a `getCharacters` function
* use `fetch` to get a list of characters
  * use "https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character"
  * set the header `origin` to `null`
  * return an object with `{ totalPages, results }`
* BONUS:
  * write a mock for your service

## Use service in Characters component

* add characters array to `Characters` component state
* on `componentDidMount` use your service to fetch characters
  * store the characters in state
* for each character in state create a `Character` component

## add Paging

* add `currentPage` and `totalPages` to `App.js` state
* Display the `currentPage` and `totalPages` on the page
* add buttons to increment and decrement `currentPage`
* BONUS:
  * remove the increment button when currentPage >= totalPages
  * remove the decrement button when current page <= 1

## use paging

* update the `getCharacters` service to take a page to fetch
* update `Characters.js` component to take `currentPage` as a prop
  * pass `currentPage` to `getCharacters`
* pass `currentPage` from `App` to `Characters`
* create a `updateTotalPages` function in `App.js`
* pass `updateTotalPages` to `Characters`
* after fetching characters in `Characters.js` update the totalPages

## Extract Paging

* create `src/components/paging/Paging.js`
* `Paging.js` needs to display the currentPage and totalPages
* `Paging.js` needs to be able to update the currentPage
* HINT: `Paging.js` does not have state

## Add Location and Locations

* Do the same thing you did for characters, but for locations
  * [https://rickandmortyapi.com/api/location](https://rickandmortyapi.com/api/location)
* on the left side of your App display a list of characters
* on the right side of your App display a list of locations
* BONUS:
  * Add filtering
    * choose to display only human, alien, robot, or humanoid characters
    * choose to display locations by type
  * Use a HOC to fetch data from the API
