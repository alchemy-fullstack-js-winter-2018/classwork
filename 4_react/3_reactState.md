# React State

## Update eslint

* npm i -D babel-eslint
* add `"parser": "babel-eslint"` to .eslintrc

## Use react PureComponent class to create a component

React components can be either functions or classes.

[https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)

* create all files needed to setup react
  (webpack.config.js, index.js, index.html)
* create a `src/components/App.js`
* export a `class` that `extends` `PureComponent`
* create a `render` method that returns an `h1`

## Handle events

* add a button to your `App` component
* create a class property `handleClick` function to handle click events:
```js
class MyClass {
  someFunction = () => {}
}
```
* on each click `console.log` "Clicked"
* apply the `handleClick` function to button using `onClick={handleClick}`

## Count clicks

State can be tracked by creating a `state` object as a class property

[https://reactjs.org/docs/react-component.html#setstate](https://reactjs.org/docs/react-component.html#setstate)

* create `state`
```js
class App extends PureComponent {
  state = {

  };
}
```
* add a counter property to state starting at `0`
* update `handleClick` to increment the counter using `this.setState`
* `console.log` the new counter value

## Create a text input

* add a text property to state
* add an input to `App`
  * inputs value should be text
  * `onChange` update the state with `this.setState`
* display `this.state.text` in an h1 below the input box

## Use figlet

* `npm i figlet`
* create a fonts directory
* cp node_modules/figlet/fonts fonts
* create a `formatText` function
  * use `figlet.text` to create formated text
  * use `this.setState` to save the formated text to state
* invoke the `formatText` function after successfully updating text
  * HINT: inside of `handleChange`
* display the formated text in the browser
  * HINT: You may need to use a `<pre>` element
* BONUS:
  * Use async/await to format text
    * you'll need to `npm i -D @babel/polyfill`
    * update your entry point in webpack
      `entry: ['@babel/polyfill', './src/index.js']`
    * use `util.promisify` to change `figlet.text` into a promise

## Select a font

* add `font` to state (default to whatever font you like)
* create a select with an option for each font you want to support
  (Pick a few)
  * HINT: this is like what we did with ul/li
* `onChange` use `handleChange`
* update `formatText` to use the font stored in state

## Create an image

* `npm i dom-to-image`
* add `img` to state
* create a `textToImage` function
  * use `domToImage.toPng` to create an image
    * HINT: you need to get the dom element to pass to domToImage
      you can use `document.getElementById` or create a ref [https://reactjs.org/docs/refs-and-the-dom.html](https://reactjs.org/docs/refs-and-the-dom.html)
  * update state with the created image
* on submitting your form call the `textToImage` function

## Save image

* `npm i file-saver`
* create a `saveFile` function
  * use `fileSaver.saveAs` to save an image
* create a button with `onClick` handled by `saveFile`

## extract components

* `TextFormatter`
  * Allows us to type text
* `FormatDisplay`
  * Displays formatted text
* `FileSaver`
  * displays and saves an image
