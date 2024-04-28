import React, { useState } from 'react';
import Questions from "@/components/Questions";
import ButtonAndBack from "@/components/ButtonAndBack";
import Answers1 from "@/components/Quiz Components/Radio Answers/Answers 1";
import QuizError from '@/components/Quiz Components/Quiz Error';

export default function Question1({ handleQuizNext1Click, handleUserAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showError, setShowError] = useState(false);  // State to track if an option has been selected

  // Function to handle option change from Answers1
  const handleOptionChange = (value) => {
    setSelectedOption(value); 
    setShowError(false); // Set the selected option
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
        score = 0; // Handle unexpected values gracefully
        break;
    }
    console.log("Selected answer:", value, "with score:", score);
    handleUserAnswer(1, score); // Pass the question number and score back to the main quiz component
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

  return (
    <div>
      <Questions questionText="What is your primary mode of transportation for commuting?" />
      <Answers1 onOptionChange={handleOptionChange} />
      <ButtonAndBack
        linking='' // Keep or adjust as necessary
        buttonText='CONTINUE'
        onClickHandlerSecondaryMainButton={handleContinueClick}
        tabbingButtonSecondary="3" // Restore if it was originally there for accessibility reasons
        disabled={!selectedOption}  // Disable the button if no option is selected
      />
      {showError && <QuizError/>}
    </div>
  );
}
