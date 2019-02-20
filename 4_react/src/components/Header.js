import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, subHeader }) {
  return (
    <>
      <h1>{title}</h1>
      {subHeader && <SubHeader subTitle={subHeader} />}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subHeader: PropTypes.string
};

function SubHeader({ subTitle }) {
  return (
    <h2>{subTitle}</h2>
  );
}

SubHeader.propTypes = {
  subTitle: PropTypes.string.isRequired
};

export default Header;
