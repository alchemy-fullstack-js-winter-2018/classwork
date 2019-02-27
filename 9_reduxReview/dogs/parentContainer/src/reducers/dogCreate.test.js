import reducer from './dogCreate';

describe('dogCreate reducer', () => {
  it('handles the update name action', () => {
    const state = {
      name: '',
      age: '',
      weight: ''
    };

    const updatedState = reducer(state, {
      type: 'DOG_CREATE_UPDATE_NAME',
      payload: 'rover'
    });

    expect(updatedState).toEqual({
      name: 'rover',
      age: '',
      weight: ''
    });
  });
});
