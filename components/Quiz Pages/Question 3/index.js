import React from "react";
import Questions from "@/components/Questions";
import ButtonAndBack from "@/components/ButtonAndBack";
import YesNoButton from "@/components/Quiz Components/YesNoButton";

export default function Question3({ handleQuizNext3Click, handleUserAnswer }) {
  const handleYes = (score) => {
    console.log("Yes button clicked");
    handleUserAnswer(3, score); // Capture the answer 'Yes'
  };

  const handleNo = (score) => {
    console.log("No button clicked");
    handleUserAnswer(3, score); // Capture the answer 'No'
  };

  const handleContinueClick = () => {
    console.log("Continue button clicked");
    handleQuizNext3Click(); // Navigate to the next question
  };

  return (
    <div>
      <Questions questionText="Do you compost organic waste?" />
      <YesNoButton onYes={handleYes} onNo={handleNo} />
      <ButtonAndBack
        linking='' // Keeping the linking property as per your original component
        buttonText='CONTINUE'
        buttonColorBg='var(--white)' // Ensure the background color is white
        buttonColorPrimary='var(--green)' // Ensure the primary color is green
        onClickHandlerSecondaryMainButton={handleContinueClick}
        nextQuestionHandler={handleQuizNext3Click} // Ensure this points to the next question handling function
      />
    </div>
  );
}
