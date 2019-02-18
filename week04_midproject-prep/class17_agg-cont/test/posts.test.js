// require('dotenv').config();
// const connect = require('../lib/utils/connect');
// const mongoose = require('mongoose');
// const seedData = require('./seedData');

const { getToken, getPost } = require('./dataHelpers');

const User = require('../lib/models/User');
const request = require('supertest');
const app = require('../lib/app');

describe('post routes', () => {
  // beforeAll(() => {
  //   return connect();
  // });

  // beforeEach(done => {
  //   return mongoose.connection.dropDatabase(done);
  // });

  // beforeEach(() => {
  //   return seedData({ totalUsers: 3, totalPosts: 5, totalComments: 10 });
  // });

  // afterAll(done => {
  //   return mongoose.connection.close(done);
  // });

  it('can create a post', () => {
    // return User.findOne()
    //   .then(user => {
    //     return request(app)
    //       .post('/auth/signin')
    //       .send({ username: user.username, password: 'password' });
    //   })
    //   .then(res => {
    //     const token = res.body.token;
    //     return request(app)
    //       .post('/posts')
    //       .send({ photoUrl: '1234', caption: 'hi there' })
    //       .set('Authorization', `Bearer ${token}`);
    //   })
    return request(app)
      .post('/posts')
      .send({ photoUrl: '1234', caption: 'hi there' })
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toEqual({
          photoUrl: '1234',
          caption: 'hi there',
          _id: expect.any(String),
          __v: 0
        });
      });
  });

  it('update a post', async() => {
    return getPost()
      .then(post => {

      });
  });
});
