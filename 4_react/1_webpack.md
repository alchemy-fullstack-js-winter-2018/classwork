# webpack

* `npm i -D webpack webpack-cli`
* `npm i -D html-webpack-plugin`
* `npm i -D clean-webpack-plugin`
* `npm i -D babel-loader @babel/core @babel/preset-env`

## First webpack config

* create a `src/index.js` and `webpack.config.js`
* write some code inside of `src/index.js`
    * E.G. `console.log('hi')`
* `module.exports` an object from `webpack.config.js`
* add an entry point to `src/index.js`
    * [https://webpack.js.org/concepts#entry](https://webpack.js.org/concepts#entry)
* create a new `package.json` script that will build your JavaScript for production
    * [https://webpack.js.org/api/cli/#shortcuts](https://webpack.js.org/api/cli/#shortcuts)

## Add an output

* [https://webpack.js.org/concepts#output](https://webpack.js.org/concepts#output)

## Bust cache with a hash

* [https://webpack.js.org/configuration/output/#outputfilename](https://webpack.js.org/configuration/output/#outputfilename)

## Add babel-loader

* [https://github.com/babel/babel-loader](https://github.com/babel/babel-loader)

## Add Html plugin

* [https://webpack.js.org/plugins/html-webpack-plugin/](https://webpack.js.org/plugins/html-webpack-plugin/)

## Add clean webpack plugin

* [https://github.com/johnagan/clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
