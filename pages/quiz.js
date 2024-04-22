import React, { useState } from 'react';
import styles from "@/styles/Quiz.module.css"
import ProgressBar from '@/components/Quiz Components/ProgTest';
import Question1 from '@/components/Quiz Pages/Question 1';
import Question2 from '@/components/Quiz Pages/Question 2';
import Question3 from '@/components/Quiz Pages/Question 3';
import Question4 from '@/components/Quiz Pages/Question 4';
import Question5 from '@/components/Quiz Pages/Question 5';
import QuizComplete from '@/components/Quiz Pages/QuizComplete';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showQuestionOne, setShowQuestionOne] = useState(true);
  const [showQuestionTwo, setShowQuestionTwo] = useState(false);
  const [showQuestionThree, setShowQuestionThree] = useState(false);
  const [showQuestionFour, setShowQuestionFour] = useState(false);
  const [showQuestionFive, setShowQuestionFive] = useState(false);
  const [showQuizComplete, setShowQuizComplete] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(0);

  const handleUserAnswer = (questionId, answer) => {
    console.log("Received answer for question", questionId, ":", answer);
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
};


  const handleQuizNextClick = () => {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
    if (currentQuestion === 1) {
      setShowQuestionOne(false);
      setShowQuestionTwo(true);
    } else if (currentQuestion === 2) {
      setShowQuestionTwo(false);
      setShowQuestionThree(true);
    } else if (currentQuestion === 3) {
      setShowQuestionThree(false);
      setShowQuestionFour(true);
    } else if (currentQuestion === 4) {
      setShowQuestionFour(false);
      setShowQuestionFive(true);
    }
  };

  const handleFinishClick = () => {
    setShowQuestionFive(false); // Make sure to hide the last question
    calculateFinalScore(); // Calculate the score before showing the completion screen
    setShowQuizComplete(true); // Ensure this is set to display the QuizComplete component
  };

  const calculateFinalScore = () => {
    console.log("User answers before processing:", userAnswers);
  
    const totalScore = Object.values(userAnswers).reduce((acc, answer) => {
      console.log("Processing answer:", answer);
      const score = parseFloat(answer); // Parse as a floating-point number
      if (isNaN(score)) {
        console.error("Failed to convert answer to score:", answer);
        return acc;
      }
      return acc + score;
    }, 0);
  
    const clampedScore = Math.max(1.5, Math.min(totalScore, 16));
    const floatScore = parseFloat(clampedScore.toFixed(1));
    setFinalScore(floatScore);
  
    console.log("Calculated total score:", totalScore);
  };
  

return (
    <div className={styles.mainQuiz}>
      <style jsx global>{`
        body {
          margin: 0px;
        }
      `}
      </style>
      <ProgressBar currentQuestion={currentQuestion}/>
      {showQuestionOne && <Question1 handleQuizNext1Click={handleQuizNextClick} handleUserAnswer={handleUserAnswer} />}
      {showQuestionTwo && <Question2 handleQuizNext2Click={handleQuizNextClick} handleUserAnswer={handleUserAnswer} />}
      {showQuestionThree && <Question3 handleQuizNext3Click={handleQuizNextClick} handleUserAnswer={handleUserAnswer} />}
      {showQuestionFour && <Question4 handleQuizNext4Click={handleQuizNextClick} handleUserAnswer={handleUserAnswer} />}
      {showQuestionFive && <Question5 handleQuizCompleteClick={handleFinishClick} handleUserAnswer={handleUserAnswer} />}
      {showQuizComplete && <QuizComplete score={finalScore}/>}
      <img src='/images/quizbackground.jpeg' alt='Outer Space Image' width={430} height={932} className={styles.space} />
    </div>
  );
}
