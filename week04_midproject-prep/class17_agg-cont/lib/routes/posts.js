const { Router } = require('express');
const Post = require('../models/Post');
const { ensureAuth } = require('../middleware/ensureAuth');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    const {
      photoUrl,
      caption,
      tags
    } = req.body;

    Post.create({
      photoUrl,
      caption,
      tags,
      user: req.user._id
    })
      .then(post => res.send(post))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    const { user, caption } = req.query;
    Post
      .find({ user, caption })
      .then(posts => res.send(posts))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Post
      .findById(req.params.id)
      .populate('user')
      .then(post => res.send(post))
      .catch(next);
  });
