# JavaScript fundamentals and TDD

## Readings and Resources

* [Node.js History](https://blog.risingstack.com/history-of-node-js/)
* [StackOverflow 2018 Survey](https://insights.stackoverflow.com/survey/2018)
* [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

## Agenda

* Node.js
  * Why node?
    * It's popular!
    * One language from back-end to the front-end
  * Brief history of node
    * Created in 2009
    * 2011 - 2013 Big company adoption (LinkedIn, Uber, Wal-mart, Netflix, eBay, PayPal)
    * 2014 The io.js split
      * faster releases
      * Joyant advisory board
    * 2015 The Node Foundation, merge node.js and io.js
    * 2016 left-pad incident
    * 2018 event-stream incident
  * npm
    * package.json
      * dependencies vs devDependencies
      * scripts
    * install package
    * node_modules
  * DEMO: run file with node
  * DEMO: run file with `npm start`
* TDD
  * DEMO: power
  * DEMO: doubleAll
* CI/CD
  * Continuous Integration
  * Continuous Deployment
  * Travis as a task runner
* Functions
  * A few ways to declare function
    * `function` declaration
    * `function` expression
    * arrow function
    * EXERCISE: add functions
  * arguments vs parameters
  * higher order functions
    * functions as arguments
      * DEMO: `map`
      * DEMO: write `map`
* Lab preparation
  * map
  * filter
  * findIndex
  * reduce
  * every
  * forEach

## Test Driven Development

Test driven development (TDD) is a methodology for writing code. It relies on a very short development cycle, which means that it expects developers to create small and testable features. TDD can speed up development time, validate the integrity of new code, and help developers understand their goals. TDD is broken down into three steps - red, green, and refactor.

### RED

Make a plan for the code that needs to be written. Write tests that will run your code and check for expected behaviors. At this point, if you run your tests, they should fail (red).

### GREEN

Write code to pass the specifications of your tests, without making it perfect. If you succeed, when you run your tests, they should pass (green).

### REFACTOR

Refactor your code for speed, memory optimization, and most importantly **readability**. Your tests should still pass after this step.

## CI/CD

### Continuous Integration

Continuous Integration (CI) is the process of regularly merging individually developed features of code into a shared repository as frequently as they are made. In the most basic setup, a team could simply use git to merge code into a master branch. However more advanced CI patterns can be developed. These patterns can automate static analysis (lining), running unit and integration tests, testing platform support, enforcing code reviews, and much more.

### Continuous Delivery

Continuous Delivery (CD) is the process of deploying software in short cycles by ensuring that software can be deployed at any time. CD pairs very will with advanced CI setups that help ensure the core product is always a stable code base.

### TravisCI

Travis CI is a hosted and distributed continuous integration service (CI) that is most often used to build and test software projects hosted on GitHub.

Travis CI is configured by adding a file named `.travis.yml` to the root directory of the repository. This file specifies the programming language used, the desired building and testing environment and various other parameters.

Once you have this file, create an account at travis-ci.com (login with your github account information) and install the "travis-ci" app into your github account when prompted. Travis will automatically pull your code and run your tests on every push.
