const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });

  it('creates an object in the database', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
  });

  it('can find an object by id', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    // -> { name: 'fluffy', _id: 1234 }
    // createdCat._id === 1234

    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

  it('throws an error when trying to find an object that does not exist', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });

  it('can update a stored item by id', () => {
    const createdTweet = db.create({ user: 'Ryan', text: 'My first tweet' });
    const _id = createdTweet._id;

    // { name: 'fluffy' }
    const updatedTweet = db.findByIdAndUpdate(_id, { user: 'Ryan', text: 'EDITED: My first tweet' });

    // expect(updatedTweet.text).toEqual('EDITED: My first tweet');
    expect(updatedTweet)
      .toEqual({
        user: 'Ryan',
        text: 'EDITED: My first tweet',
        _id: expect.any(String)
      });
  });

  it('throws an error when there is no id to update', () => {
    expect(() => {
      db.findByIdAndUpdate('badId', { name: 'fluffy' });
    }).toThrowError();
  });


});
