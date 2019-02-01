const inquirer = require('inquirer');
const posts = require('./posts');

const select = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: 'What would you like to do?',
      choices: [{ name: 'View Posts', value: 'posts' }]
    }
  ])
    .then(({ selection }) => {
      if(selection === 'posts') {
        return posts();
      }
    })
    .then(select);
};

module.exports = select;
