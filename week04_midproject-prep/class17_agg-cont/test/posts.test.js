const { getPost, getToken } = require('./dataHelpers');
const request = require('supertest');
const app = require('../lib/app');

describe('post routes', () => {
  it('can create a new post', () => {
    return request(app)
      .post('/posts')
      .set('Authorization', `Bearer ${getToken()}`)
      .send({
        photoUrl: 'testUrl',
        caption: 'hi there',
        tags: ['hi']
      })
      .then(res => {
        expect(res.body).toEqual({
          photoUrl: 'testUrl',
          caption: 'hi there',
          tags: ['hi'],
          _id: expect.any(String),
          user: expect.any(String),
          __v: 0
        });
      });

  });

  it('gets a list of posts', () => {
    return request(app)
      .get('/posts')
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });

  it('gets a post by id', () => {
    return getPost()
      .then(post => {
        return request(app)
          .get(`/posts/${post._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          user: expect.objectContaining({
            username: expect.stringContaining('seed')
          }),
          caption: expect.any(String),
          photoUrl: expect.any(String),
          tags: [],
          _id: expect.any(String),
          __v: 0
        });
      });
  });
});
