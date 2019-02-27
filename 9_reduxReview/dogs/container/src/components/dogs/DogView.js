import React, { PureComponent } from 'react';
import Dogs from './Dogs';
import AddDogForm from './AddDogForm';

export default class DogView extends PureComponent {
  state = {
    name: '',
    age: '',
    weight: '',
    dogs: []
  };

  addDog = dog => {
    this.setState(state => ({
      dogs: [...state.dogs, dog]
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, age, weight } = this.state;
    this.addDog({ name, age, weight });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, age, weight, dogs } = this.state;
    return (
      <>
        <AddDogForm name={name} age={age} weight={weight} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Dogs dogs={dogs} />
      </>
    )
  }
}
