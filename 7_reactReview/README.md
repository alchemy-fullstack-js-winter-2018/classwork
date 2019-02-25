# React Review

# Agenda

* Higher order functions
  * currying
    * pass arguments to a function one at a time
    * DEMO: add2
  * partial application
    * pass some arguments to a function
    * DEMO: add2
  * closures
    * have access to the lexical environment above
    * useful to hold state between calls
    * DEMO: counter
  * thunks
    * usually takes no arguments
    * used to put off work until later
    * DEMO: fetchPage
  * Memoization
    * what is memoization?
      * used to cache a result based on arguments
      * useful for "pure" functions (that don't rely on outside state)
* React
  * JSX
  * props and state
  * lifecycle
    * componentDidMount
    * componentWillUnmount
    * componentDidUpdate
  * Functional components vs Component vs PureComponent
    * Presentation vs Container
    * shouldComponentUpdate
  * higher order components
    * withTitle
    * withStorage
  * react-router
    * route config
  * Enzyme


How does `this` work?
