class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    const username = `user${this.clients.size}`;
    client.username = username;
    this.clients.set(username, client);
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(username, newUsername) {
    if(this.clients.has(newUsername)) return false;

    const client = this.clients.get(username);
    this.clients.delete(username);
    client.username = newUsername;
    this.clients.set(newUsername, client);

    return true;
  }

  all() {
    return Array.from(this.clients.values());
  }

  remove(client) {
    this.clients.delete(client.username);
  }

  broadcast(client) {
    return this.all().filter(c => c !== client);
  }
}

module.exports = ChatRoom;
