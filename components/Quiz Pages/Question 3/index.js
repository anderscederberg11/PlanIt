import React from "react";
import Questions from "@/components/Questions";
import ButtonAndBack from "@/components/ButtonAndBack";

export default function Question3({ handleQuizNext3Click }) {

  const handleContinueClick = () => {
    console.log("Continue button clicked");
    handleQuizNext3Click();
  };

  return (
    <div>
      <Questions questionText="Do you compost organic waste?" />
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
