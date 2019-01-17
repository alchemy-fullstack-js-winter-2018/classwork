const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/service/rickAndMortyApi.js');

describe('rick and morty api tests', () => {
  it('gets a list of characters', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text).toContain('Rick');
      });
  });

  it('saves a note for a character', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'Great character' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  it('gets notes for a character', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'Great character' })
      .then(() => {
        return request(app)
          .get('/characters/1');
      })
      .then(res => {
        expect(res.text).toContain('Great character');
      });
  });
});
