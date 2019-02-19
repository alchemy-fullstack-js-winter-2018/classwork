import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';
import tree1 from '../assets/tree1.jpg';
import tree2 from '../assets/tree2.jpg';

function Dogs({ namesOfDogs }) {
  const listOfDogs = namesOfDogs.map(({ name, about }) => {
    // const li = document.createElement('li');
    // li.textContent = name;

    // const props = {
    //   name: name,
    //   about: about
    // }
    // Dog(props);

    return (
      <li key={name}>
        <Dog name={name} about={about} />
      </li>
    );
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
  namesOfDogs: PropTypes.array.isRequired
};

export default Dogs;
