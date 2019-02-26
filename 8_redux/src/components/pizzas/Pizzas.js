import React from 'react';
import PropTypes from 'prop-types';

function Pizzas({ title, pizzas }) {
  const pizzaList = pizzas.map((pizza, i) => {
    return <li key={i}>{pizza.name} - {pizza.size}</li>
  });

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {pizzaList}
      </ul>
    </>
  )
}

Pizzas.propTypes = {
  pizzas: PropTypes.array.isRequired
};

export default Pizzas;
