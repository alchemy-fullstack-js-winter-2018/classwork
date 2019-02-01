const config = require('../config');
const { getToken } = require('./tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');
const getPost = require('./post');

module.exports = () => {
  return request
    .get(`${config.url}/posts`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(posts => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'post',
          message: 'Which post?',
          choices: posts.map(post => post._id)
        }
      ]);
    })
    .then(({ post }) => {
      return getPost(post);
    });
};
