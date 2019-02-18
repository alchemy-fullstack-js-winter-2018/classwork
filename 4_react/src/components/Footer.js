import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

const Footer = ({ name }) => (
  <footer className={styles.footer}>
    {name}
  </footer>
);

Footer.propTypes = {
  name: PropTypes.string.isRequired
};

export default Footer;
