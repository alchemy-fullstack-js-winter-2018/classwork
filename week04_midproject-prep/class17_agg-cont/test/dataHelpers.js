require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const seedData = require('./seedData');
const Post = require('../lib/models/Post');
const User = require('../lib/models/User');

const request = require('supertest');
const app = require('../lib/app');

beforeAll(() => {
  connect();
});

beforeEach(done => {
  mongoose.connection.dropDatabase(done);
});

beforeEach(() => {
  return seedData({ totalUsers: 3, totalPosts: 5, totalComments: 10 });
});

let token;
beforeEach(() => {
  return User.findOne({ username: 'seed1' })
    .then(user => {
      return request(app)
        .post('/auth/signin')
        .send({
          username: user.username,
          password: 'password'
        });
    })
    .then(res => {
      token = res.body.token;
    });
});

afterAll(done => {
  mongoose.connection.close(done);
});

const prepare = model => JSON.parse(JSON.stringify(model));
const prepareAll = models => models.map(prepare);

const createGetters = Model => {
  /*
  User
  {
    getUser: (query = {}) => User.findOne(query).then(prepare),
    getUsers: (query = {}) => User.find(query).then(prepareAll)
  }

  */
  return {
    [`get${Model.modelName}`]: (query = {}) => Model.findOne(query).then(prepare),
    [`get${Model.modelName}s`]: (query = {}) => Model.find(query).then(prepareAll),
  };
};

module.exports = {
  // getUser: (query = {}) => User.findOne(query).then(prepare),
  // getUsers: (query = {}) => User.find(query).then(prepareAll),
  // getPost: (query = {}) => Post.findOne(query).then(prepare),
  // getPosts: (query = {}) => Post.find(query).then(prepareAll),
  // getComment: (query = {}) => Comment.findOne(query).then(prepare),
  // getComments: (query = {}) => Comment.find(query).then(prepareAll),
  ...createGetters(User),
  ...createGetters(Post),
  // ...createGetters(Comment),
  getToken: () => token
};
