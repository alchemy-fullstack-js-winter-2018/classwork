const { getUser } = require('../dataHelpers');
const mongoose = require('mongoose');
const { Types } = require('mongoose');
const Post = require('../../lib/models/Post');

describe('Post model', () => {
  it('validates a good model', async () => {
    const user = await getUser();
    const post = new Post({
      user: user._id,
      photoUrl: 'http://image.com',
      caption: 'hi there',
      tags: ['a tag']
    });
    expect(post.toJSON()).toEqual({
      user: Types.ObjectId(user._id),
      photoUrl: 'http://image.com',
      caption: 'hi there',
      tags: ['a tag'],
      _id: expect.any(Types.ObjectId)
    });
  });

  it('has a required user', () => {
    const post = new Post({
      photoUrl: 'http://image.com',
      caption: 'hi there',
      tags: ['a tag'],
      _id: expect.any(Types.ObjectId)
    });
    const errors = post.validateSync().errors;
    expect(errors.user.message).toEqual('Path `user` is required.');
  });

  it('has a required photoUrl', async () => {
    const user = await getUser();

    const post = new Post({
      user: user._id,
      caption: 'hi there',
      tags: ['a tag'],
      _id: expect.any(Types.ObjectId)
    });
    const errors = post.validateSync().errors;
    expect(errors.photoUrl.message).toEqual('Path `photoUrl` is required.');
  });
});
