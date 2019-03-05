import React from 'react';
import PropTypes from 'prop-types';

function Words({ words, color }) {
  const wordsList = words.map(word => <li key={word}>{word}</li>);

  return (
    <ul style={{ color: color || '#000000' }}>
      {wordsList}
    </ul>
  );
}

Words.propTypes = {
  words: PropTypes.array.isRequired,
  color: PropTypes.string
};

export default Words;
