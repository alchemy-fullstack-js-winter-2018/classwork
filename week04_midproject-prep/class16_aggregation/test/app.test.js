const { getUser, getToken } = require('./dataHelpers');
const request = require('supertest');
const User = require('../lib/models/User');

const app = require('../lib/app');

describe('app', () => {
  it('can /signup a user', () => {
    return request(app)
      .post('/auth/signup')
      .send({ email: 'test@test.com', password: 'password' })
      .then(res => {
        expect(res.body).toEqual({
          user: {
            _id: expect.any(String),
            email: 'test@test.com'
          },
          token: expect.any(String)
        });
      });
  });

  it('can /signin a user', () => {
    return getUser({ email: 'seed1@test.com' })
      .then(user => {
        return request(app)
          .post('/auth/signin')
          .send({
            email: user.email,
            password: 'password'
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          user: {
            email: 'seed1@test.com',
            _id: expect.any(String)
          },
          token: expect.any(String)
        });
      });
  });

  it('can not /signin a user with bad password', () => {
    return getUser({ email: 'seed1@test.com' })
      .then(() => {
        return request(app)
          .post('/auth/signin')
          .send({
            email: 'seed1@test.com',
            password: 'badPassword'
          });
      })
      .then(res => {
        expect(res.status).toEqual(401);
      });
  });

  it('can not /signin a user with bad email', () => {
    return request(app)
      .post('/auth/signin')
      .send({
        email: 'badEmail@test.com',
        password: 'password'
      })
      .then(res => {
        expect(res.status).toEqual(401);
      });
  });

  it('has a /verify route', () => {
    return request(app)
      .get('/auth/verify')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        // expect res.body to be a user
        expect(res.body).toEqual({
          email: 'seed1@test.com',
          _id: expect.any(String)
        });
      });
  });
});
