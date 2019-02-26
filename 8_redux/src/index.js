import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';

render(
  <App />,
  document.getElementById('root')
);



// Redux gives us a global object where all
// state lives. This object is called our store.

// import store from './store';
// import { createCheesePizza, createPepperoniPizza } from './actions/pizza';
// import { cheesePizzas, pepperoniPizzas, largeCheesePizzas, smallPepperoniPizzas } from './selectors/pizza';

// console.log(store.getState())

// // console.log('before', store.getState());

// // store.dispatch(createCheesePizza(18));


// // store.dispatch(createCheesePizza(10));


// // store.dispatch(createCheesePizza(14));

// // store.dispatch(createPepperoniPizza(14));

// // console.log('after', store.getState());

// // console.log('cheese', cheesePizzas(store.getState()));
// // console.log('large cheese', largeCheesePizzas(store.getState()));

// // console.log('pepperoni', pepperoniPizzas(store.getState()));
// // console.log('small pepperoni', smallPepperoniPizzas(store.getState()));
