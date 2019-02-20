const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(3);

const mongoose = require('mongoose');
const { Post, User } = require('./models');

mongoose.connect('mongodb://172.17.0.2:27017/agg', { useNewUrlParser: true, useCreateIndex: true })


// Promise.all to send multiple values
Post
  .findOne()
  .then(post => {
    return Promise.all([
      Promise.resolve(post),
      User.findOne({ _id: post.user })
    ]);
  })
  .then(([post, user]) => {
    console.log(post);
    console.log(user);
  });

promise1
  .then(fulfilledValue => {
    return Promise.all([
      Promise.resolve(fulfilledValue),
      Promise.resolve(fulfilledValue + 1)
    ]);
  })
  .then(fulfilledValue => {
    console.log(fulfilledValue)
  })





// Create a new promise with an executor function
function executor() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('after 1 second')
    }, 1000)
  })
}

const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('after 1 second')
  }, 1000)
})

executor()
  .then(fulfilledValue => console.log(fulfilledValue))

// use Promise.reject to reject a value
Promise.reject('my error')
  // .then(fulfilledValue => console.log('NOT HERE'))
  .catch(reason => console.error(reason))

// Promise.resolve turns a value into a promise
function myPromise(param) {
  return Promise.resolve(1)
    .then(fulfilledValue => console.log(fulfilledValue))
}

myPromise(promise1);

Promise.resolve(1)
  .then(fulfilledValue => console.log(fulfilledValue))


// Promise.race fulfills or rejects with the first promise that completes
Promise.race([promise1, promise2, promise3])
  .then(fulfilledValue => {
    // const fulfilledPromise1 = fulfilledValue[0]
    // const fulfilledPromise2 = fulfilledValue[1]
    // const fulfilledPromise3 = fulfilledValue[2]

    console.log(fulfilledValue)
  })
  .catch(reason => {
    console.log(reason);
  })


// Promise.all fulfills with all fulfillValues from the promises in an array
// it rejects if any reject
Promise.all([promise1, promise2, promise3])
  .then(fulfilledValue => {
    // const fulfilledPromise1 = fulfilledValue[0]
    // const fulfilledPromise2 = fulfilledValue[1]
    // const fulfilledPromise3 = fulfilledValue[2]

    console.log(fulfilledValue)
  })
  .catch(reason => {
    console.log(reason);
  })

// a promise can be chained with thens
promise
  .then(fulfilledValue => 'one')
  .then(fulfilledValue => {
    console.log(fulfilledValue)
    return 'two'
  })
  .then(fulfilledValue => {
    console.log(fulfilledValue)
    return 'three'
  })
  .then(fulfilledValue => {
    console.log(fulfilledValue)
    return 'four'
  })
  .then(fulfilledValue => console.log(fulfilledValue))
  .catch(reason => {
    console.error(reason)
  })
  .finally(() => {
    console.log('finally!')
  });


// const storeCreatePromise = (item) => {
//   return new Promise((resolve, reject) => {
//     store.create(item, (err, createdItem) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(createdItem)
//       }
//     })
//   })
// }

// it('find all objects tracked by the store', done => {
//   Promise.all([1, 2, 3, 4, 5].map(item => storeCreatePromise({ item })))
//     .then(([item1, item2, item3, item4, item5]) => {

//     })
//   storeCreatePromise({ item: 1 })
//     .then(() => storeCreatePromise({ item: 2 }))
//     .then(() => storeCreatePromise({ item: 3 }))
//     .then(() => storeCreatePromise({ item: 4 }))
//     .then(() => storeCreatePromise({ item: 5 }))
//   store.create({ item: 1 }, (err, item1) => {
//     store.create({ item: 2 }, (err, item2) => {
//       store.create({ item: 3 }, (err, item3) => {
//         store.create({ item: 4 }, (err, item4) => {
//           store.create({ item: 5 }, (err, item5) => {
//             store.find((err, listOfItems) => {
//               expect(err).toBeFalsy();
//               expect(listOfItems).toHaveLength(5);
//               expect(listOfItems).toContainEqual(item1);
//               expect(listOfItems).toContainEqual(item2);
//               expect(listOfItems).toContainEqual(item3);
//               expect(listOfItems).toContainEqual(item4);
//               expect(listOfItems).toContainEqual(item5);
//               done();
//             });
//           });
//         });
//       });
//     });
//   });
