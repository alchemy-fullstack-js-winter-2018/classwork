const { Router } = require('express');
const Tweet = require('../models/Tweet');
const { ensureAuth } = require('../middleware/ensureAuth');
const { HttpError } = require('../middleware/error');

const patcher = (body, fields) => {
  return Object.keys(body)
    .reduce((acc, key) => {
      if(fields.includes(key) && body[key]) {
        acc[key] = body[key];
      }
      return acc;
    }, {});
};

module.exports = Router()
  .post('/', (req, res, next) => {
    const { handle, text } = req.body;
    Tweet
      .create({ handle, text })
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Tweet
      .find()
      .populate('handle', { handle: true })
      .select({ __v: false })
      .then(tweets => res.send(tweets))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const _id = req.params.id;
    Tweet
      .findById(_id)
      .populate('handle', { handle: true })
      .select({ __v: false })
      .then(foundTweet => {
        if(!foundTweet) {
          return next(new HttpError(404, `No Tweet found with ${_id}`));
        }
        res.send(foundTweet);
      })
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    const patched = patcher(req.body, ['handle', 'text']);
    Tweet
      .findByIdAndUpdate(req.params.id, patched, { new: true })
      .populate('handle', { handle: true })
      .select({ __v: false })
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Tweet.findByIdAndDelete(req.params.id)
      .then(() => res.send({ deleted: 1 }))
      .catch(next);
  })

  .get('/stats/avg', ensureAuth, (req, res, next) => {
    Tweet.averageLength()
      .then(avg => res.send(avg))
      .catch(next);
  });
