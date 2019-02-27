import React from 'react';
import { shallow } from 'enzyme';
import AddDogForm from './AddDogForm';

describe('AddDogForm', () => {
  it('can add a new dog', () => {
    const addDog = jest.fn();
    const wrapper = shallow(
      <AddDogForm addDog={addDog} />
    );

    wrapper.setState({
      name: 'rover',
      age: '10',
      weight: '5 lbs'
    });

    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });

    expect(addDog).toBeCalledWith({ name: 'rover', age: 10, weight: '5 lbs' });
  });
});
