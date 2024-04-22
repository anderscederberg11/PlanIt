import React, { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import styles from "./ProgressF.module.css"

const ProgressF = () => {
  const [currentStep, setCurrentStep] = useState(4);

  // Handle advancing to the next step
  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className={styles.progContainer}>
      {/* Your quiz content goes here */}
      <ProgressBar currentStep={currentStep} />
      {/* Next button */}
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
};

export default ProgressF;
