'use client';

import styles from './Article.module.css';

export default function BackToTop() {
  function handleClick(e) {
    e.preventDefault();
    const opts = { top: 0, behavior: 'smooth' };
    document.body.scrollTo?.(opts);
    document.documentElement.scrollTo?.(opts);
    window.scrollTo?.(opts);
  }

  return (
    <a href="#" className={styles.backToTop} onClick={handleClick} aria-label="Me leve para o topo">
      <span>me leve para o topo</span>
      <span className={styles.backToTopIcon}>
        <svg width="15" height="10" viewBox="0 0 14.8333 9.5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.75 4.75H13.4167M10.0833 8.75L14.0833 4.75L10.0833 0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </a>
  );
}
