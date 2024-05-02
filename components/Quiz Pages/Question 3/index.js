import React, { useState } from "react";
import Questions from "@/components/Questions";
import ButtonAndBack from "@/components/ButtonAndBack";
import YesNoButton from "@/components/Quiz Components/YesNoButton";
import QuizError from "@/components/Quiz Components/Quiz Error";

export default function Question3({ handleQuizNext3Click, handleUserAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);  
  const [showError, setShowError] = useState(false);  

  const handleYes = () => {
    console.log("Yes button clicked");
    handleUserAnswer(3, 2.5); 
    setSelectedAnswer('Yes'); 
    setShowError(false);       
  };

  const handleNo = () => {
    console.log("No button clicked");
    handleUserAnswer(3, 0.5);
    setSelectedAnswer('No');  
    setShowError(false);      
  };

  const handleContinueClick = () => {
    if (!selectedAnswer) {
      setShowError(true);  
      console.log("Please select an answer before continuing.");
    } else {
      console.log("Continue button clicked with answer:", selectedAnswer);
      handleQuizNext3Click(); 
    }
  };

  return (
    <div>
      <Questions questionText="Do you compost organic waste?" />
      <YesNoButton onYes={handleYes} onNo={handleNo} />
      {showError && <QuizError />} 
      <ButtonAndBack
        linking=''
        buttonText='CONTINUE'
        buttonColorBg='var(--white)' 
        buttonColorPrimary='var(--green)' 
        onClickHandlerSecondaryMainButton={handleContinueClick}
      />
    </div>
  );
}
