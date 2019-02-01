const config = require('../config');
const { setToken } = require('./tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');

console.log('select', require('./select'));


module.exports = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Username'
    },
    {
      type: 'password',
      name: 'password',
      message: 'Password'
    }
  ])
    .then(({ username, password }) => {
      return request
        .post(`${config.url}/auth/signin`)
        .send({ username, password });
    })
    .then(res => {
      setToken(res.body.token);
    });
};
