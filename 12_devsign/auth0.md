# Auth0

## Agenda

* create auth0 account
* add `dotenv-webpack` plugin
* add `.env` file
  * `AUTH0_CLIENT_ID`
  * `AUTH0_DOMAIN`
  * `AUTH0_REDIRECT=http://localhost:7890/callback`
* create a `src/services/auth.js`
  * create auth0 web client
  * clientId is `AUTH0_CLIENT_ID`
  * domain is `AUTH0_DOMAIN`
  * redirectUri is `AUTH0_REDIRECT`
    * after logging in where should users be sent
  * responseType `token id_token`
  * scope `openid profile`
* create `login` function using `authorize()`
* add login to `Home` temporarily
* create session redux stuff
* create `withSession` HOC
* create `handleAuth` function
  * create a new promise
  * use `parseHash` to parse message from auth0
  * if `accessToken` and `idToken` exists
    * get `userInfo` and resolve with `idToken` and
      user info
* create `Callback` container
