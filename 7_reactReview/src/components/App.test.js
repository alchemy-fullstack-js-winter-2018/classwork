import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App, { Home } from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  it('can click', () => {
    const wrapper = mount(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Has home', () => {
    const wrapper = shallow(
      <Home />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
