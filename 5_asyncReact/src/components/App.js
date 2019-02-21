import React, { Component } from 'react';
import Paging from './paging/Paging';
import Characters from './characters/Characters';

export default class App extends Component {
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
        <Characters
          page={currentPage}
          updateTotalPages={this.updateTotalPages}
        />
      </>
    );
  }
}
