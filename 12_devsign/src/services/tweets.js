export const getTweets = () => {
  // return fetch('http://localhost:7890/tweets')
  //   .then(res => res.json());
  return Promise.resolve([
    { _id: '1234', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } },
    { _id: '1235', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } },
    { _id: '1236', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } },
    { _id: '1237', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } },
    { _id: '1238', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } }
  ]);
};
