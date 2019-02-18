import React from 'react';
import tree1 from '../assets/tree1.jpg';
import tree2 from '../assets/tree2.jpg';
import tree3 from '../assets/tree3.jpg';
import tree4 from '../assets/tree4.jpg';
import tree5 from '../assets/tree5.jpg';
import tree6 from '../assets/tree6.jpg';
import styles from './Main.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <h2>All about trees</h2>
      <ul>
        <li><img src={tree1} /></li>
        <li><img src={tree2} /></li>
        <li><img src={tree3} /></li>
        <li><img src={tree4} /></li>
        <li><img src={tree5} /></li>
        <li><img src={tree6} /></li>
      </ul>
    </main>
  );
}
