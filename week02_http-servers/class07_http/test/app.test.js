const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .post('/note')
      .send({ text: 'Im a note' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });
});
