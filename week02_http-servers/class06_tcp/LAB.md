TCP Chat Server
===

Create a TCP Chat server that allows clients to connect and chat.

## Basic Requirements

When the user connects to the chat room, there are 3 commands they can run:

1. The first command they can run is the `@all` command. When you write `@all`, you can add the text you want
the channel to see, and it will show all users your message. An example of sending a message globally to the
whole channel would be `@all hello world!`. This would return the message hello world for everyone to see.

2. The second command they can run is the `@nick` command. When you first connect to the chat room, you will be
assigned a random number for your username, for example `user1`. You can alter this by running `@nick:username`,
where username is the new chosen username. An example of changing a user named user1 to exampleuser would
be `@nick:exampleuser`. When you change your nickname, the channel is notified of the name change.

3. The final command the user can run is the `@dm` command. By typing in `@dm:username`,
where username is the person they are trying to direct message, and then the message itself, you can directly
message a specific user without having it display globally to the channel. A written example to reach a user
named exampleuser would be `@dm:exampleuser Hello this is a direct message!`.

When sending via `@all` prepend the username. For example, if `user1` sends `@all hello world`, then
message should be delivered as `user1: hello world`.

When sending via `@dm` prepend `(DM) usename: `. For example, `(DM) user1: Hi there`.

When a user exits the chat room (disconnects), the channel will be informed that their "username" has logged out.

If that user reconnects, they would again be randomly assigned a username with a number.

## Implementation Guidelines

The server needs to be able to manage clients. Use the built-in JavaScript `Map` class to correlate user names
to sockets. `Map` also allows you to iterative all of the sockets.

Basic job of the server

1. Connect/add a new client - stores a client socket and returns the randomly (or sequentially :) generated user
  name.
1. Broadcast - accept an @all message and send to all clients _except_ the sender.
1. Rename - modify the `map` when a client sends a new `@nick`
1. DM - send a message directly to one user

## Unit Tests

End-to-end (E2E) Testing with TCP can be tricky as messages get batched and can be hard to
discriminate (there is no messaging protocol after all!).

Your biggest tool for testing is to use other data structures to do specific tasks. We can isolate two
main jobs:

1. Managing clients in the chat
1. Parsing incoming messages

And TDD them (they are both synchronous):

### `ChatRoom`

A class that tracks clients (users) in the chat room

1. Test that a ChatRoom instance 'takes a socket, assigns random user name, and stores by user name'. Do this by
    * creating a new ChatRoom
    * call `.add(client)` (note you can pass in a "mock", a plain empty object. Doesn't have to be a socket instance)
    * assert that a name was returned as the username property of the client object (e.g. `assert.equal(client.username, username);`)
    * assert that the name was assigned as a property to the client object
    * call `.getClient(username)` passing in the username returned from the `.add` call, and assert that the
    returned object is the same as what you supplied to the `.add` call.
2. Test that a ChatRoom instance 'renames a user'
    * Create a new ChatRoom and add a user as above
    * Call `.rename(username, newusername)`
    * assert that the call to `.rename` returns `true`
    * assert that using the old username does not return the client
    * assert that using the new username **does** return the client
    * assert that the `client.username` is now equal to the new username (This means the property on the client object
    needs to change _as well as_ the key in the map.
3. Add a Test 'can not rename to existing user name'. Should not throw an error, just do not do the requested operation
    * Create a new ChatRoom and add two users
    * Call `.rename(username1, username2)`
    * assert that return value from `.rename` is `false`
    * assert that username1 and username2 return their original client objects
4. Test that calling `.all()` on the chat room returns an array of all clients
    * Hint: Use the following to get all values from a map (example assumes map is stored as `this.clients`):
    ```js
    return [...this.clients.values()];
    ```

### `parseMessage`

A synchronous function that takes a string message and returns a command object
(what is the command and any parameters) based on the contents of the message.

1. Test that it 'ignores strings that do not start with @'
    * Test that `null` is returned when passed a string that does not start with "@"
2. Test that a string like `'@cmd:param some text'` returns an object like:
    ```js
    {
        command: 'cmd',
        arg: 'param',
        text: 'some text'
    }
    ```

## App and Server

### `app.js`

The primary TCP server is created in the `app.js` module. It should export a function that
returns the configured tcp server. It does not start the server (call `.listen`). This will be done in `server.js` in root
of project.

The server needs to:
* Create a ChatRoom instance to manage chat users
* Call `net.createServer` to create the server and listen for events
* Subscribe to client socket events
* (Remember to call `client.setEncoding('utf8');` to work with just text)
* Properly orchestrate connected clients.

### `server.js`

This file does not live in `lib`, but at the root of the project. It imports the "app" and calls `listen`
with the port number

### Manual Testing

1. Manually test the server using telnet, or the simple TCP client we made in class.

## Rubric **10pts**

* Manage clients (`ChatRoom`) and tests **3pts**
* Parse Messages (`parseMessage`) and tests **3pts**
* Server App and Listen (`app.js` and `server.js`) **3pts**
* Project Organization and Clean Code **1pts**
