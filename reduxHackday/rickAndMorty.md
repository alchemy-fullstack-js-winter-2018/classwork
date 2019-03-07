# Rick And Morty Characters

Create an application that makes asynchronous API calls to display
Rick and Morty characters.

## Redux setup

* create `src/reducers/characters.js`
  * store an array of characters
* create `src/reducers/index.js`
  * use `combineReducer`
* create `src/store.js`

## Fetch Characters

Use the [Rick and Morty API](https://rickandmortyapi.com/)

* create `src/services/rickAndMortyApi.js`
  * create a `getCharacters(page)` function
* create `src/action/characters.js`
  * create a `fetchCharacters` actionCreator
  * use either the promise middleware or thunk middleware
* update the `src/reducers/characters.js` reducer to handle your action

## Display Character

* create a `src/components/characters/Characters.js`
  * display a list of characters
* create a `src/containers/characters/AllCharacters.js`
* Add `AllCharacters` to your `App.js` file

## Add Paging

* add currentPage and totalPages to your characters reducer
* make AllCharacters pageable.

## Add a loading screen
