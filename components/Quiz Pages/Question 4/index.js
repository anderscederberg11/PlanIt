import React, { useState} from "react";
import Questions from "@/components/Questions";
import Answers4 from "@/components/Quiz Components/Radio Answers/Answers 4";
import ButtonAndBack from "@/components/ButtonAndBack";
import QuizError from "@/components/Quiz Components/Quiz Error";

export default function Question4({ handleQuizNext4Click, handleUserAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showError, setShowError] = useState(false);  

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setShowError(false);
    let score = 0; 
    
    switch (value) {
      case 'option1':
        score = 0.5; 
        break;
      case 'option2':
        score = 1.3; 
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
    handleUserAnswer(4, score);  
  };

  const handleContinueClick = () => {
    if (!selectedOption) {
      setShowError(true);
    } else {
      console.log("Continue button clicked");
      setShowError(false);
      handleQuizNext4Click();  
    }
  };

  return (
    <div>
      <Questions questionText="How often do you take flights for leisure or business travel?" />
      <Answers4 onOptionChange={handleOptionChange}/>
      <ButtonAndBack
        linking=''
        buttonText='CONTINUE'
        buttonColorBg='var(--white)'
        buttonColorPrimary='var(--green)'
        onClickHandlerSecondaryMainButton={handleContinueClick}
        nextQuestionHandler={handleQuizNext4Click}
      />
      {showError && <QuizError/>}
    </div>
  );
}
