import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withPaging = ComponentToPage => {
  class WithPaging extends Component {
    state = {
      currentPage: 1,
      totalPages: 1
    };

    incrementCurrentPage = () => {
      this.setState(state => ({ currentPage: state.currentPage + 1 }));
    };

    decrementCurrentPage = () => {
      this.setState(state => ({ currentPage: state.currentPage - 1 }));
    };

    updateTotalPages = whatTotalPagesShouldBe => {
      this.setState({ totalPages: whatTotalPagesShouldBe });
    };

    render() {
      const { currentPage, totalPages } = this.state;
      return (
        <>
          <Paging
            currentPage={currentPage}
            totalPages={totalPages}
            increment={this.incrementCurrentPage}
            decrement={this.decrementCurrentPage}
          />
          <ComponentToPage
            page={currentPage}
            updateTotalPages={this.updateTotalPages}
            {...this.props}
          />
        </>
      );
    }
  }

  return WithPaging;
};

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
