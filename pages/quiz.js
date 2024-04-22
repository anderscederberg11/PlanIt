// pages/index.js

import React, { useState } from 'react';
import styles from "@/styles/Quiz.module.css"
import ProgressF from '@/components/Quiz Components/Progress F';
import Question1 from '@/components/Quiz Pages/Question 1';
import Question2 from '@/components/Quiz Pages/Question 2';
import Question3 from '@/components/Quiz Pages/Question 3';
import Question4 from '@/components/Quiz Pages/Question 4';
import Question5 from '@/components/Quiz Pages/Question 5';

export default function Home() {

  const [showQuestionOne, setShowQuestionOne] = useState(true);
  const [showQuestionTwo, setShowQuestionTwo] = useState(false);
  const [showQuestionThree, setShowQuestionThree] = useState(false);
  const [showQuestionFour, setShowQuestionFour] = useState(false);
  const [showQuestionFive, setShowQuestionFive] = useState(false);

  const handleQuestionTwo = () => {
    setShowQuestionOne(false)
    setShowQuestionTwo(true)
  }

  const handleQuestionThree = () => {
    setShowQuestionTwo(false)
    setShowQuestionThree(true)
  }

  const handleQuestionFour = () => {
    setShowQuestionThree(false)
    setShowQuestionFour(true)
  }

  const handleQuestionFive = () => {
    setShowQuestionFour(false)
    setShowQuestionFive(true)
  }

return (
    <div className={styles.mainQuiz}>
        <style jsx global>{`
          body {
              margin: 0px;
          }
          `}
          </style>
          {showQuestionOne && (
            <Question1 handleQuizNext1Click={handleQuestionTwo}/>
          )}
          {showQuestionTwo && <Question2/>}

          {showQuestionTwo && (
            <Question2 handleQuizNext2Click={handleQuestionThree}/>
          )}
          {showQuestionThree && <Question3/>}

          {showQuestionThree && (
            <Question3 handleQuizNext3Click={handleQuestionFour}/>
          )}
          {showQuestionFour && <Question4/>}

          {showQuestionFour && (
            <Question4 handleQuizNext4Click={handleQuestionFive}/>
          )}
          {showQuestionFive && <Question5/>}


      <img src='/images/quizbackground.jpeg' alt='Outer Space Image' width={430} height={932} className={styles.space}></img>

    </div>
  );
};

