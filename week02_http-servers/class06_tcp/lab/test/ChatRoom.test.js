const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {
  let chatRoom;
  let client;

  beforeEach(() => {
    chatRoom = new ChatRoom();
  });

  beforeEach(() => {
    client = { client: 1 };
    chatRoom.add(client);
  });

  it('adds a client', () => {
    expect(client).toEqual({
      ...client,
      username: expect.any(String)
    });
  });

  it('gets a client by username', () => {
    expect(chatRoom.getClient(client.username)).toBe(client);
  });

  it('renames a client', () => {
    const originalUsername = client.username;
    chatRoom.rename(client.username, 'renamedUser');
    expect(client.username).toEqual('renamedUser');

    expect(chatRoom.getClient('renamedUser')).toEqual(client);
    expect(chatRoom.getClient(originalUsername)).toBeUndefined();
  });

  it('cannot rename to an existing username', () => {
    const client1 = {};
    const client2 = {};
    chatRoom.add(client1);
    chatRoom.add(client2);

    chatRoom.rename(client1.username, client2.username);

    expect(client1.username).not.toEqual(client2.username);
  });

  it('gets a list of all clients', () => {
    Array.from(Array(5)).forEach(() => chatRoom.add({}));

    const all = chatRoom.all();
    expect(all).toHaveLength(6);
    expect(all).toContain(client);

  });
});
