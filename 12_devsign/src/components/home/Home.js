import React from 'react';
import styles from './Home.css';
import Tweets from '../tweets/Tweets';

const popularTweets = [
  { _id: '1234', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } },
  { _id: '1235', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } },
  { _id: '1236', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } },
  { _id: '1237', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } },
  { _id: '1238', text: 'my first tweet', user: { handle: 'ryan', profileImg: 'http://i.pravatar.cc/1000' } }
];

export default function Home() {
  return (
    <main className={styles.Home}>
      <Tweets tweets={popularTweets} />
    </main>
  );
}
