import React from 'react';
import { withUser } from './withUser';

const Header = ({ user }) => {
  return (
    <header>
      <h2>{user.displayName}</h2>
      <img alt="User" src={user.photoURL} />
    </header>
  )
}

export default withUser(Header)
