import React from 'react';
import styles from './Home.css';
import PopularTweets from '../../containers/tweets/PopularTweets';


export default function Home() {
  return (
    <main className={styles.Home}>
      <PopularTweets />
    </main>
  );
}
