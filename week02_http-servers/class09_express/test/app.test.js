const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const request = require('supertest');
const app = require('../lib/app');

describe('tweets', () => {

  const createTweet = (text, handle = 'ryan') => {
    return request(app)
      .post('/tweets')
      .send({ handle, text })
      .then(res => res.body);
  };

  beforeEach(done => {
    rimraf('./data/tweets', err => {
      done(err);
    });
  });

  beforeEach(done => {
    mkdirp('./data/tweets', err => {
      done(err);
    });
  });

  it('creates a new tweet', () => {
    return request(app)
      .post('/tweets')
      .send({ handle: 'ryan', text: 'my first tweet' })
      .then(res => {
        expect(res.body).toEqual({
          handle: 'ryan',
          text: 'my first tweet',
          _id: expect.any(String)
        });
      });
  });

  it('gets a list of tweets', () => {
    return Promise.all(['hi', 'a tweet'].map(createTweet))
      .then(() => {
        return request(app)
          .get('/tweets');
      })
      .then(res => {
        expect(res.body).toHaveLength(2);
      });
  });

  it('gets a tweet by id', () => {
    return createTweet('my first tweet')
      .then(tweet => {
        return Promise.all([
          Promise.resolve(tweet._id),
          request(app)
            .get(`/tweets/${tweet._id}`)
        ]);
      })
      .then(([_id, res]) => {
        expect(res.body).toEqual({
          text: 'my first tweet',
          handle: 'ryan',
          _id
        });
      });
  });

  it('errors when there is no tweet with an id', () => {
    return request(app)
      .get('/tweets/badId')
      .then(res => {
        expect(res.status).toEqual(400);
        expect(res.body).toEqual({ error: 'Bad Id: badId' });
      });
  });

  it('can update a tweet', () => {
    return createTweet('a twet')
      .then(tweet => {
        const id = tweet._id;
        return request(app)
          .put(`/tweets/${id}`)
          .send({ ...tweet, text: 'a tweet' });
      })
      .then(res => {
        expect(res.body.text).toEqual('a tweet');
      });
  });

  it('can delete a tweet', () => {
    return createTweet('a tweet')
      .then(tweet => {
        return request(app)
          .delete(`/tweets/${tweet._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({ deleted: 1 });
      });
  });
});
