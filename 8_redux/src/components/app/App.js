import React from 'react';
import CheesePizza from '../../containers/pizzas/CheesePizza';
import AllPizzas from '../../containers/pizzas/AllPizzas';
import CreateCheesePizza from '../../containers/pizzas/CreateCheesePizza';

function App() {
  return (
    <>
      <h1>My Pizzas</h1>
      <CreateCheesePizza />
      <CheesePizza />
      <AllPizzas />
    </>
  )
}

export default App;
