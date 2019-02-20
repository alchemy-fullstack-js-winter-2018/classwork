import React from 'react';
import PropTypes from 'prop-types';


function Character({ character }) {
  const { name, status, species, gender } = character;

  return (
    <tr>
      <td>{name}</td>
      <td>{status}</td>
      <td>{species}</td>
      <td>{gender}</td>
    </tr>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
