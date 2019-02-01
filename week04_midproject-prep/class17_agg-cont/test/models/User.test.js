require('../dataHelpers');
const mongoose = require('mongoose');
const { Types } = require('mongoose');
const User = require('../../lib/models/User');
const { tokenize, untokenize } = require('../../lib/utils/token');

describe('User model', () => {
  it('validates a good model', () => {
    const user = new User({ username: 'test' });
    expect(user.toJSON()).toEqual({ username: 'test', _id: expect.any(Types.ObjectId) });
  });

  it('has a required username', () => {
    const user = new User({});
    const errors = user.validateSync().errors;
    expect(errors.username.message).toEqual('Username required');
  });

  it('stores a _tempPassword', () => {
    const user = new User({
      username: 'test',
      password: 'p455w0rd'
    });
    expect(user._tempPassword).toEqual('p455w0rd');
  });

  it('has a passwordHash', () => {
    // const user = new User({
    //   email: 'test@test.com',
    //   password: 'p455w0rd'
    // });
    // user.save();

    return User.create({
      username: 'test',
      password: 'p455w0rd'
    })
      .then(user => {
        expect(user.passwordHash).toEqual(expect.any(String));
        expect(user.password).toBeUndefined();
      });
  });

  it('can compare good passwords', () => {
    return User.create({
      username: 'test',
      password: 'p455w0rd'
    })
      .then(user => {
        return user.compare('p455w0rd');
      })
      .then(result => {
        expect(result).toBeTruthy();
      });
  });

  it('can compare bad passwords', () => {
    return User.create({
      username: 'test',
      password: 'p455w0rd'
    })
      .then(user => {
        return user.compare('badPassword');
      })
      .then(result => {
        expect(result).toBeFalsy();
      });
  });

  it('can find a user by token', () => {
    return User.create({
      username: 'test',
      password: 'p455w0rd'
    })
      .then(user => tokenize(user))
      .then(token => User.findByToken(token))
      .then(userFromToken => {
        // -> then expect to get a user
        expect(userFromToken).toEqual({
          username: 'test',
          _id: expect.any(String)
        });
      });
  });

  it('can create an auth token', () => {
    return User.create({
      username: 'test',
      password: 'password'
    })
      .then(user => user.authToken())
      .then(untokenize)
      .then(user => {
        expect(user).toEqual({
          username: 'test',
          _id: expect.any(String)
        });
      });
  });
});
