const config = require('../config');
const { getToken } = require('./tokenStore');
const request = require('superagent');
const img = require('terminal-image');

module.exports = id => {
  return request
    .get(`${config.url}/posts/${id}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .type('image/jpeg')
    .then(res => res.body)
    .then(post => {
      return Promise.all([
        Promise.resolve(post),
        request.get(post.photoUrl)
      ]);
    })
    .then(([post, res]) => {
      return Promise.all([
        Promise.resolve(post),
        img.buffer(res.body)
      ]);
    })
    .then(([post, image]) => {
      console.log(image);
      console.log(post.caption);
    });
};
