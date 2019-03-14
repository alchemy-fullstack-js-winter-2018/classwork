# Backend auth0

## Resources

* [express-jwt](https://github.com/auth0/express-jwt)
* [jwks-rsa](https://github.com/auth0/node-jwks-rsa)
* [node-auth0](https://github.com/auth0/node-auth0)

## Agenda

* add auth0 environment variables
  * `AUTH0_CLIENT_ID`
  * `AUTH0_DOMAIN`
* express middleware
  * `npm i express-jwt jwks-rsa`
  * use `express-jwt` middleware
    * secret
      * `jwksRsa.expressJwtSecret`
        * `cache`
        * `rateLimit`
        * `jwkRequestsPerMinute`
        * `jwksUri`
          `https://AUTH0_DOMAIN/.well-known/jwks.json`
    * audience `AUTH0_CLIENT_ID`
    * issuer `https://AUTH0_DOMAIN/`
    * algorithms: `['RS256']`
* auth0 `ManagementClient`
  * create backend application in auth0
  * add backend app to API
  * add `read:users` scope
  * add to .env
    * `AUTH0_MANAGEMENT_CLIENT_ID`
    * `AUTH0_MANAGEMENT_CLIENT_SECRET`
    * `AUTH0_AUDIENCE`
  * create ManagementClient
    * clientId
    * clientSecret
    * domain
    * audience
    * scope
  * `getUser` by id
  * `getUsers` by ids
    * use query `user_id: ${ids.join(' OR ')}`
  * `joinUsers(model, on = 'handel')`
    * dedup user ids
    * `getUsers`
    * join on model
