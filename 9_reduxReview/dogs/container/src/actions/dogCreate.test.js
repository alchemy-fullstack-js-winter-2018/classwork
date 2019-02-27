import {
  DOG_CREATE_UPDATE_NAME,
  updateName
} from './dogCreate';

describe('dogCreate actions', () => {
  it('creates a update name action', () => {
    const action = updateName('rover');

    expect(action).toEqual({
      type: DOG_CREATE_UPDATE_NAME,
      payload: 'rover'
    });
  });
});
