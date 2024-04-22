import React from "react";
import Questions from "@/components/Questions";
import SliderComponent from "@/components/Quiz Components/Slider";
import ButtonAndBack from "@/components/ButtonAndBack";

export default function Question2({ handleQuizNext2Click }) {

  const handleContinueClick = () => {
    console.log("Continue button clicked");
    handleQuizNext2Click();
  };

  return (
    <div>
      <Questions questionText="How many kilometers do you typically drive per week?" />
      <SliderComponent/>
      <ButtonAndBack
        linking=''
        buttonText='CONTINUE'
        onClickHandlerSecondaryMainButton={handleContinueClick}
      />
    </div>
  );
}
