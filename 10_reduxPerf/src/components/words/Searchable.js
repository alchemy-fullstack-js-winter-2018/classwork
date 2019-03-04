import React from 'react';
import PropTypes from 'prop-types';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';

function Searchable() {
  return (
    <>
      <SearchWords />
      <TopWords />
    </>
  );
}

Searchable.propTypes = {
  match: PropTypes.object.isRequired
};

export default Searchable;
