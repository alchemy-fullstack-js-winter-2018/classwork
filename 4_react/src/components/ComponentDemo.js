import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class ComponentDemo extends Component {
  state = {
    dogs: ['rover', 'bingo', 'spot']
  };

  handleAddDog = () => {
    this.setState({ dogs: [...this.state.dogs, 'buddy'] });
  };

  render() {
    return (
      <>
        <Header title="My Title" subHeader="My SubHeader" />
        <Header title="My Title1" />
        <Header title="My Title2" />
        <Dogs dogs={this.state.dogs} addDog={this.handleAddDog} />
      </>
    );
  }
}

function Dogs({ dogs, addDog }) {
  // [<li>rover</li>, <li>bingo</li>, <li>spot</li>]
  const dogsList = dogs.map(dogName => {
    return <li key={dogName}>{dogName}</li>;
  });

  return (
    <>
      <ul>
        {dogsList}
      </ul>
      <button onClick={addDog}>Add Dog to List</button>
    </>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired,
  addDog: PropTypes.func.isRequired
};

export default ComponentDemo;
