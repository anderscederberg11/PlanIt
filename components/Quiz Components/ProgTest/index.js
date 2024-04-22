import React from 'react';
import styles from './ProgTest.module.css';// Import CSS module for styling

const ProgressBar = ({ currentQuestion }) => {

  const progress = ( currentQuestion - 1 ) / 5 * 100;

  const circlePosition = {
    left: `calc(${progress}% - 12px)`, // Adjusted calculation
  };

  const progressBarWidth = {
    width: `${progress}%`, // Updated calculation
  };

  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={progressBarWidth}></div>
      <div className={styles.circle} style={circlePosition}>{currentQuestion}</div>
    </div>
  );
};

export default ProgressBar;
