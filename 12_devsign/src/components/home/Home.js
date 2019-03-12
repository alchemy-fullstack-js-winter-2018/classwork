import React from 'react';
import styles from './Home.css';
import { ArticleHeader, ArticlePosts, ArticlePost } from './ArticleHeader';
import Header from '../header/Header';

export default function Home() {
  return (
    <main className={styles.Home}>
      <article>
        <ArticleHeader backgroundColor="yellow" content="Great Article">
          <hgroup>
            <h2>My Article</h2>
            <h3>By Lance</h3>
          </hgroup>
        </ArticleHeader>

        <details>
          <summary>My Article</summary>
          <ul>
            <li>Tiddly</li>
            <li>Winks</li>
          </ul>
        </details>

        <section>
          <h4>I. TWs</h4>
          <p>Tiddly Winks.</p>
          <figure>
            <img alt="Intertwined flamingos"
              src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg"
            />
            <figcaption>Is this cute?</figcaption>
          </figure>
        </section>

        <section>
          <h4>Resources</h4>
          <ul>
            <li><a href="/some/source">My Source</a></li>
            <li><a href="/some/source">Another Source</a></li>
          </ul>
        </section>

      </article>

      <aside>
        <ArticlePosts>
          <ArticlePost>My First Post</ArticlePost>
          <ArticlePost>My Second Post</ArticlePost>
          <ArticlePost>My Third Post</ArticlePost>
        </ArticlePosts>
      </aside>

    </main>
  );
}
