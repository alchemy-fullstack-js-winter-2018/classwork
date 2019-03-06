import React from 'react';
import PropTypes from 'prop-types';

function Facts({ facts }) {
  const factsListItems = facts.map((fact, i) => <li key={i}>{fact}</li>);

  return (
    <ul>
      {factsListItems}
    </ul>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};

export default Facts;
