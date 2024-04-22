import React from "react";
import Questions from "@/components/Questions";
import { useState } from "react";
import ButtonAndBack from "@/components/ButtonAndBack";
import Answers1 from "@/components/Quiz Components/Radio Answers/Answers 1";

export default function Question1({ handleQuizNext1Click }) {

  const handleContinueClick = () => {
    console.log("Continue button clicked");
    handleQuizNext1Click();
  };

  return (
    <div>
      <Questions 
        questionText="What is your primary mode of transportation for commuting?" 
        
      />
      <ButtonAndBack
        linking=''
        buttonText='CONTINUE'
        onClickHandlerSecondaryMainButton={handleContinueClick}
        tabbingButtonSecondary="3"

      />
      <Answers1 />
    </div>

  );
}
