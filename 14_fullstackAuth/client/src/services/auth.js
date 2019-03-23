import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT,
  responseType: 'token id_token',
  scope: 'openid profile'
});


export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, result) => {
      if(result && result.accessToken && result.idToken) {
        return auth0.client.userInfo(result.accessToken, (err, profile) => {
          console.log(profile);
          return resolve({
            token: result.idToken,
            id: profile.sub,
            name: profile.name,
            picture: profile.picture
          });
        });
      }
      reject(err || 'ERROR!');
    });
  });
};
