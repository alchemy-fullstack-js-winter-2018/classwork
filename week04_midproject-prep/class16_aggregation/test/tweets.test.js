const { getUser, getTweet, getTweets } = require('./dataHelpers');
const request = require('supertest');
const app = require('../lib/app');

describe('tweets app', () => {
  it('can create a new tweet', () => {
    return getUser()
      .then(user => {
        return request(app)
          .post('/tweets')
          .send({
            handle: user._id,
            text: 'hello tweets'
          })
          .then(res => {
            expect(res.body).toEqual({
              handle: expect.any(String),
              text: 'hello tweets',
              _id: expect.any(String),
              __v: 0
            });
          });
      });

  });

  it('finds a list of tweets', () => {
    return request(app)
      .get('/tweets')
      .then(res => {
        return Promise.all([
          Promise.resolve(res.body),
          getTweets()
        ]);
      })
      .then(([body, tweets]) => {
        expect(body).toHaveLength(tweets.length);
        tweets.forEach(tweet => {
          delete tweet.__v;
          expect(body).toContainEqual({ ...tweet, handle: { _id: tweet.handle } });
        });
      });
  });

  it('gets a tweet by id', () => {
    return getTweet()
      .then(tweet => {
        return Promise.all([
          Promise.resolve(tweet),
          request(app)
            .get(`/tweets/${tweet._id}`)
        ]);
      })
      .then(([tweet, res]) => {
        expect(res.body).toEqual({
          handle: { _id: tweet.handle },
          text: tweet.text,
          _id: tweet._id,
        });
      });
  });

  it('errors when a bad id is sent', () => {
    return request(app)
      .get('/tweets/5c479e5d22e69952c13506a8')
      .then(res => {
        expect(res.status).toEqual(404);
      });
  });

  it('updates a tweet by id', () => {
    return getTweet()
      .then(tweet => {
        return request(app)
          .patch(`/tweets/${tweet._id}`)
          .send({ text: 'Hi there! I am updated' });
      })
      .then(res => {
        expect(res.body).toEqual({
          handle: expect.any(Object),
          text: 'Hi there! I am updated',
          _id: expect.any(String),
        });
      });
  });

  it('deletes a tweet by id', () => {
    return getTweet()
      .then(tweet => {
        return Promise.all([
          Promise.resolve(tweet._id),
          request(app)
            .delete(`/tweets/${tweet._id}`)
        ]);
      })
      .then(([_id, res]) => {
        expect(res.body).toEqual({ deleted: 1 });
        return request(app)
          .get(`/tweets/${_id}`);
      })
      .then(res => {
        expect(res.status).toEqual(404);
      });
  });
});
