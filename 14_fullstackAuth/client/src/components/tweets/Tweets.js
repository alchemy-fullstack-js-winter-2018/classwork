import React from 'react';
import PropTypes from 'prop-types';

function Tweets({ tweets }) {
  const tweetList = tweets.map(tweet => (
    <li key={tweet._id}>
      <img src={tweet.handle.picture} />
      <p>{tweet.handle.nickname}</p>
      <p>{tweet.text}</p>
    </li>
  ));

  return (
    <ul>
      {tweetList}
    </ul>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Tweets;
