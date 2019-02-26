import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AddDogForm extends PureComponent {
  static propTypes = {
    addDog: PropTypes.func.isRequired
  };

  state = {
    name: '',
    age: '',
    weight: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, age, weight } = this.state;
    this.props.addDog({ name, age: Number.parseInt(age), weight });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, age, weight } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <input type="number" name="age" value={age} onChange={this.handleChange} />
        <input type="text" name="weight" value={weight} onChange={this.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}
