import reducer from './session';

jest.mock('../services/auth.js', () => ({}));

describe('session reducer', () => {
  it('handles SET_SESSION', () => {
    const state = {
      token: '',
      id: '',
      handle: '',
      profilePicture: ''
    };

    const payload = {
      token: '1234',
      id: '5678',
      handle: 'ryan',
      profilePicture: 'http://test.com/image.png'
    };

    const updatedState = reducer(state, {
      type: 'SET_SESSION',
      payload
    });

    expect(updatedState).toEqual(payload);
  });
});
