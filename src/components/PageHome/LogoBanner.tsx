import React from 'react';
import styles from 'src/styles/LogoBanner.module.css';

const LogoBanner: React.FC = () => {
  return (
    <div className={styles.logoBannerContainer}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoSquare}></div>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.englishTitle}>ORTHODOX EDUCATION</h1>
        <div className={styles.titleDivider}></div>
        <h2 className={styles.chineseTitle}>
          正心<span className={styles.greenText}>教育</span>
        </h2>
        <p className={styles.motto}>欲修其身者 先正其心</p>
      </div>
      {/* <div className={styles.yearContainer}>
        <p className={styles.yearText}>Start Being Your Academic Companion Since 2016</p>
      </div> */}
    </div>
  );
};

export default LogoBanner;