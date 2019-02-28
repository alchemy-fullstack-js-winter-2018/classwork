import React, { PureComponent } from 'react';
import store from '../../store';
import {
  updateName,
  updateAge,
  updateWeight,
  addDog
} from '../../actions/dogCreate';
import {
  getDogCreateName,
  getDogCreateAge,
  getDogCreateWeight
} from '../../selectors/dogCreate';
import Dogs from '../../components/dogs/Dogs';
import AddDogForm from '../../components/dogs/AddDogForm';
import { getDogs } from '../../selectors/dogs';

export default class DogView extends PureComponent {
  state = {
    name: '',
    age: '',
    weight: '',
    dogs: []
  };

  // listen for state changes and update name, age, weight
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const name = getDogCreateName(state);
      const age = getDogCreateAge(state);
      const weight = getDogCreateWeight(state);
      const dogs = getDogs(state);
      this.setState({ name, age, weight, dogs });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, age, weight } = this.state;
    store.dispatch(addDog({ name, age, weight }));
  }

  handleChange = ({ target }) => {
    const factoryMethod = {
      name: updateName,
      age: updateAge,
      weight: updateWeight
    };

    store.dispatch(factoryMethod[target.name](target.value))
    // switch (target.name) {
    //   case 'name':
    //     store.dispatch(updateName(target.value));
    //   case 'age':
    //     store.dispatch(updateAge(target.value));
    //   case 'weight':
    //     store.dispatch(updateWeight(target.value));
    // }
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
