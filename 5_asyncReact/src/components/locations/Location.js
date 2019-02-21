import React from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  const { name, dimension, type } = location;
  return (
    <tr>
      <td>{name}</td>
      <td>{dimension}</td>
      <td>{type}</td>
    </tr>
  );
}

Location.propTypes = {
  location: PropTypes.object.isRequired
};

export default Location;
