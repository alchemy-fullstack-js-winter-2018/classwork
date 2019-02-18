# React

* `npm i react react-dom`
* `npm i -D eslint-plugin-babel eslint-plugin-react @babel/preset-react`
* `npm i -D css-loader style-loader postcss-loader autoprefixer postcss-nested`
* `npm i -D url-loader file-loader`
* `npm i -D prop-types`

## Update eslint

* Changes to eslint
  * env
  * plugins
    * babel
    * react
  * extends
   * plugin:react/recommended
* Changes to webpack
  * preset-react

## First react app

* Create a React app with
  * an h1 title
  * a paragraph

## Second react app

* Create a React app with
  * an h1 title
  * a list of dog names
    * HINT: use ul and li

## Third react app

* create a React app with
  * a header
    * display the title of your site
  * a footer
    * display your name
  * a main section
    * display a list of something

## extract components

* extract header into `src/components/Header.js`
* extract footer into `src/components/Footer.js`
* extract main into `src/components/Main.js`

## add styles

* add `style-loader`, `css-loader`, and `postcss-loader`
  * add the `autoprefixer` and `postcss-nested` plugins
* create `Header.css`, `Footer.css` and `Main.css` files
  * add some styling to your app (background colors, text colors, etc.)

## add images to your site

* add the `url-loader`
* create an `src/assets/logo.png` and `src/assets/me.png`
* import `logo.png` into your Header
* import `me.png` into your Footer

## props and PropTypes

* update `Header.js` to take a title prop
* use [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
  * title is a required string
* update `Footer.js` to take a name prop
  * name is a required string
