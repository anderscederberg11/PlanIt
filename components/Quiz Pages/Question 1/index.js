import React from 'react';
import Questions from "@/components/Questions";
import ButtonAndBack from "@/components/ButtonAndBack";
import Answers1 from "@/components/Quiz Components/Radio Answers/Answers 1";

export default function Question1({ handleQuizNext1Click, handleUserAnswer }) {
  // Function to handle option change from Answers1
  const handleOptionChange = (value) => {
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
  

  // Assuming there might be a need to process something or log analytics
  const handleContinueClick = () => {
    console.log("Continue button clicked");
    handleQuizNext1Click();  // Move to the next question
  };

  return (
    <div>
      <Questions questionText="What is your primary mode of transportation for commuting?" />
      <Answers1 onOptionChange={handleOptionChange} />
      <ButtonAndBack
        linking='' // Keep or adjust as necessary
        buttonText='CONTINUE'
        onClickHandlerSecondaryMainButton={handleContinueClick} // Handling the continue click here
        tabbingButtonSecondary="3" // Restore if it was originally there for accessibility reasons
      />
    </div>
  );
}
