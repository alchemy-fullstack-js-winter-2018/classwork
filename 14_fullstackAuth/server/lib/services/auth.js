const { ManagementClient } = require('auth0');

const auth0 = new ManagementClient({
  clientId: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
  clientSecret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
  domain: process.env.AUTH0_DOMAIN,
  audience: process.env.AUTH0_AUDIENCE,
  scope: 'read:users'
});

const getUser = id => {
  return auth0.getUser({ id });
};

const getUsers = ids => {
  return auth0.getUsers({
    q: `user_id: ${ids.join(' OR ')}`
  });
};

const joinUsers = async(models, userKey = 'handle') => {
  const ids = [...new Set(models.map(model => model[userKey]))];
  const users = await getUsers(ids);

  return models.map(model => ({
    ...model.toJSON(),
    [userKey]: users.find(user => user.user_id === model[userKey])
  }));
};

module.exports = {
  getUser,
  getUsers,
  joinUsers
};
