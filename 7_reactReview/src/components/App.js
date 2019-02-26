import React, { PureComponent } from 'react';
import AddDogForm from './AddDogForm';
import Dogs from './Dogs';

export default class App extends PureComponent {
  state = {
    dogs: []
  };

  addDog = dog => {
    this.setState(state => ({
      dogs: [...state.dogs, dog]
    }));
  };

  render() {
    return (
      <>
        <AddDogForm addDog={this.addDog} />
        <Dogs dogs={this.state.dogs} />
      </>
    );
  }
}
