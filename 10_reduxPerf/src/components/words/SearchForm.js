import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ term, onChange }) {
  return (
    <input name="searchTerm" value={term} onChange={onChange} />
  );
}

SearchForm.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;
