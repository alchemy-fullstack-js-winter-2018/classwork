import React from 'react';
import PropTypes from 'prop-types';

function Paging({ currentPage, totalPages, increment, decrement }) {
  return (
    <>
      {currentPage > 1 && <button onClick={decrement}>Back</button>}
      <span>{currentPage} / {totalPages}</span>
      {currentPage < totalPages && <button onClick={increment}>Forward</button>}
    </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default Paging;
