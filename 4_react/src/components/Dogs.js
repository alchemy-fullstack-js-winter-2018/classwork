import React from 'react';
import PropTypes from 'prop-types';
import tree1 from '../assets/tree1.jpg';
import tree2 from '../assets/tree2.jpg';

function Dogs({ dogs }) {
  const listOfDogs = dogs.map(name => {
    // const li = document.createElement('li');
    // li.textContent = name;
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      <img src={tree1} />
      <img src={tree2} />
      {listOfDogs}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
