# React and Webpack

## Agenda

* Back-end review
    * Express
    * MongoDB/Mongoose
* Higher order functions
    * functions as parameters
    * functions as return values
        * curry
        * partial application
        * thunk
        * closure
* Webpack
* React

## Background

### Single Page Applications

* View changes are programmatic, browser not refreshing
* Talk to servers
* Library/Framework in charge (no html we "attach to")

### Frontend Libraries and Frameworks

* What do they do?
    * Render and Manipulate the DOM
        1. Text nodes
        1. Element properties
        1. Blocks (multiplicity)
* But what do they help me do?
    * Keep the DOM up to date
    * Respond to user interactions
* Reactive programming
    * Offer developers API for declaring or describing:
        * how the data and html should be combined (interpolation)
        * data changes
    * Syncing data to UI happens "magically"
* JavaScript (, HTML, CSS)
    * New language features
    * Optimizations and other production enhancements
    * Requires a build system
    * Requires a server to run development
* End result for "Modern Front End Development":
    1. Amount and complexity of programming logic for the app is great
        * Advanced JavaScript
        * Modularity and Organization
    1. Build system layer
        1. Transpile
        1. Package
        1. Serve
    1. Application layer
        * React offers a whole new paradigm

# Webpack

Webpack is a module bundler for JS applications. It compiles modern JavaScript applications into bundles that can be loaded into a browser. **All of your projects' assets should be managed by webpack**, including JSON, JS, CSS, SCSS, HTML, IMAGES, FONTS, etc.

## Webpack Terminology

### Loaders

Loaders are involved on `import`/`require`.

Loaders can be added to webpack to transform the data (code/json/images/etc.) imported into a project. Loaders are configured to only apply their transformations to files that match user defined regular expressions. Loaders can be chained together to transform data. Some examples include...

* Transform ES6 files into ES5 files with Babel
* Transform SCSS files into CSS files
* Transform images/fonts into base64 data embedded into your SASS/CSS

### Plugins

Plugins do additional work outside of tree. Some plugins are used in conjunction with loaders (`Extract Text`)

Plugins can be added to webpack to add extra functionality. Some examples include...

* Creating HTML files with dynamic script and link tags
* Creating CSS files
* Uglifying and minifying your code
* Creating project global vars at compile time

### Setup

#### `package.json`

1. `npm init` to create `package.json`

#### Basic Build Setup

1. `npm i webpack webpack-cli -D`
1. Create `webpack.config.js` (see example)
1. Specify:
    * entry module
    * destination
1. Run `npx webpack` to create bundle.js
1. Success? Add to `package.json` as `build`

#### Add Clean Webpack Plugin

Remove old bundle files by cleaning them when build

1. `npm i clean-webpack-plugin -D`
1. Add to `plugins` section of `webpack.config.js`
    ```js
    plugins: [
        new CleanWebpackPlugin(`${path}/bundle.*.js`),
    ],
    ```

#### Use HTMLWebpackPlugin

1. `npm i html-webpack-plugin -D`
1. Add `HTMLPlugin` to `webpack.config.js`
1. Add `index.html` to `src` that has an `id="root"` target element
1. Change config of `HTMLPlugin` to use that file
1. Restart and verify that it works!

#### Dev Server

**NOTE: You will need to restart webpack _whenever_ config changes!!!**

1. `npm i webpack-dev-server -D`
1. Add "docs" as `devServer/contentBase` to `webpack.config.js`:
    ```js
    devServer: {
        contentBase: './docs',
    },
    ```
1. Run `npx webpack-dev-server`
1. Success? Add to `package.json` as `start`
1. Commit

#### Add `babel` for ESNext

1. `npm i babel-core babel-loader babel-preset-env babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread -D`
1. Add `options` to loader in `webpack.config.js`, _or_ add `.babelrc`:
    * presets for last two browser versions, or chrome 60, etc, and
    * plugins for class properties and object-rest-spread
    * caching
1. Add `rule` to `webpack.config.js` for loading `.js` with babel
1. Try `npm start`
1. Restart and verify that it works!
1. Commit

#### Add sourcemaps FTW!

```js
devtool: 'inline-source-map',
```

#### Add React

1. `npm i react react-dom`
1. `npm i babel-preset-react -D`
1. Add `'react'` to options (or `.babelrc`) presets
1. Change code to render some react jsx to `document.body`
1. Restart and verify that it works!

#### Change `eslint` to better work with `react` and `babel`

1. `npm i babel-eslint eslint-plugin-babel eslint-plugin-react -D`
1. Refer to class example for setup of `.eslintrc`. Main changes:
    1. Extend react plugin:

        ```json
        "extends": [
            "eslint:recommended",
            "plugin:react/recommended"
        ]
        ```
    2. Use `babel` parser and plugin, change `parserOptions` and `env`:

        ```json
        "parser": "babel-eslint",
        "parserOptions": {
            "ecmaVersion": 9,
            "sourceType": "module",
            "ecmaFeatures": {
                "module": true,
                "jsx": true
            }
        },
        "env": {
            "es6": true,
            "browser": true,
            "jest": true
        },
        "plugins": [
            "babel"
        ],
        ```
    3. Add babel-specific rules:
        ```json
         "rules": {
            //...
            "babel/object-curly-spacing": ["error", "always"],
            "babel/no-invalid-this": 1,
            "babel/semi": 1
        }
        ```



#### Add `css` with style loader

1. `npm i css-loader style-loader postcss-loader autoprefixer precss postcss-import -D`
1. Add `postcss.config.js` with autoprefixer and precess:
    ```js
    /* eslint-env node */
    module.exports = {
        plugins: [
            require('postcss-import'),
            require('precss'),
            require('autoprefixer')
        ]
    };
    ```
1. Add a loader to rules
1. Add a css file
1. Restart and verify it works!

## React

React is a component based view and state management library. It's designed to be declarative, making it "painless" to create interactive UIs. React can run in browsers and natively on mobile devices.

### Components

React components have a render method that returns a view to be rendered to the page. React developers use JSX to make their applications more readable and have a more expressive workflow when writing React views. JSX looks like HTML, but gets transpiled to ordinary JavaScript `React.createElement()` invocations by Babel.

React components can also have `state` and `life cycle hooks`. When the state of a React component bound to a view changes, the view will automatically re-render itself, eliminating the pain of manual DOM manipulation under most circumstances. React components can implement specific methods that will get called at specific points. These are called life cycle hooks.

React components can also pass data into their children through what is called one way data binding. We say that React applications have one-way data flow, because data is only passed from the top down.

### State and Props

* Rules of state
    * Push state a far down as possible
    * Sibling components that share state? Must live in common ancestor
* Passing functions as actions
    * "events up"
* Props are state (or props) passed from a parent component
    * Child components **never** modify props directly
    * Nothing above a component that has state should set
    that state.
    * Though there is something called "derived state from props". Example: component is passed an id, and calls an
    API to get that entity
* And while we are mentioning it:
    * Never set `state` outside of constructor
    * Never call `setState` during _synchronous_ part of `render()`
    * Use `setState(fn)` when using previous state
