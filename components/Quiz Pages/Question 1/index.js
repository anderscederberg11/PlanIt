import React, { useState } from 'react';
import Questions from "@/components/Questions";
import ButtonAndBack from "@/components/ButtonAndBack";
import Answers1 from "@/components/Quiz Components/Radio Answers/Answers 1";
import QuizError from '@/components/Quiz Components/Quiz Error';
import QuizQuit from '@/components/Quiz Components/QuizQuit';

export default function Question1({ handleQuizNext1Click, handleUserAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showError, setShowError] = useState(false);  
  const [showQuitPopup, setShowQuitPopup] = useState(false)
  
  const handleOptionChange = (value) => {
    setSelectedOption(value); 
    setShowError(false); 
    let score;
    switch (value) {
      case 'option1':
        score = 0.5;
        break;
      case 'option2':
        score = 0.5;
        break;
      case 'option3':
        score = 2.3;
        break;
      case 'option4':
        score = 3.2;
        break;
      default:
        score = 0; 
        break;
    }
    console.log("Selected answer:", value, "with score:", score);
    handleUserAnswer(1, score); 
  };

  const handleContinueClick = () => {
    if (!selectedOption) {
      setShowError(true);
    } else {
      console.log("Continue button clicked");
      setShowError(false);
      handleQuizNext1Click();  
    }
  };

  const showQuit = () => {
    setShowQuitPopup(true)
  }

  const closeQuit = () => {
    setShowQuitPopup(false)
  }

  return (
    <div>
      <Questions questionText="What is your primary mode of transportation for commuting?" />
      <Answers1 onOptionChange={handleOptionChange} />
      <ButtonAndBack
        linking='' 
        buttonText='CONTINUE'
        onClickHandlerSecondaryMainButton={handleContinueClick}
        tabbingButtonSecondary="3" 
        disabled={!selectedOption} 
        handleBackClick={showQuit}
      />
      {showError && <QuizError/>}
      {showQuitPopup && <QuizQuit onClose={closeQuit}/>}
    </div>
  );
}
