// YesNoButton.js

import React, { useState } from 'react';
import styles from "./YesNoButton.module.css";

const YesNoButton = ({ onYes, onNo }) => {
  const [yesPressed, setYesPressed] = useState(false);
  const [noPressed, setNoPressed] = useState(false);

  const handleYesClick = () => {
    setYesPressed(true);
    setNoPressed(false);
    onYes(0.5);
  };

  const handleNoClick = () => {
    setYesPressed(false);
    setNoPressed(true);
    onNo(3.2);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${yesPressed && styles.pressed}`}
        onClick={handleYesClick}
      >
        YES
      </button>
      <button
        className={`${styles.button} ${noPressed && styles.pressed}`}
        onClick={handleNoClick}
      >
        NO
      </button>
    </div>
  );
};

export default YesNoButton;
