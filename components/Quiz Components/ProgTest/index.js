import React from 'react';
import styles from './ProgTest.module.css'; 

const ProgressBar = ({ currentQuestion, quizCompleted }) => {
  let progress;
  if (quizCompleted) {
    progress = 100; 
  } else {
    progress = (currentQuestion - 1) / 5 * 100;
  }

  const circlePosition = {
    left: `calc(${progress}% - 12px)`, 
  };

  const progressBarWidth = {
    width: quizCompleted ? '100%' : `${progress}%`, 
  };

  return (
    <div className={styles.progContainer}>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={progressBarWidth}></div>
        <div className={styles.circle} style={circlePosition}>{quizCompleted ? '✓' : currentQuestion}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
