import React, { useState} from "react";
import Questions from "@/components/Questions";
import Answers5 from "@/components/Quiz Components/Radio Answers/Answers 5";
import ButtonColoured from "@/components/mainButton";
import styles from '@/components/MainPageComponents/EnterName/EnterName.module.css';
import QuizError from "@/components/Quiz Components/Quiz Error";

export default function Question5({ handleQuizCompleteClick, handleUserAnswer }) {
  const customRadioStyle = {
    marginTop: '430px',
  };

  const customButtonStyle = {
    position: 'absolute',
    left: '25px',
  };

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
        score = 1.2; 
        break;
      case 'option3':
        score = 2.4; 
        break;
      case 'option4':
        score = 3.2; 
        break;
      default:
        score = 0; 
        break;
    }
    console.log("Selected answer:", value, "with score:", score);
    handleUserAnswer(5, score); 
  };

  const handleFinishClick = () => {
    if (!selectedOption) {
      setShowError(true); 
    } else {
      console.log("Finish clicked with selection");
      setShowError(false);
      handleQuizCompleteClick(); 
    }
  };



  return (
    <div>
      <Questions questionText="Do you actively try to conserve energy at home (turning off lights, unplugging devices, etc.)?" />
      <Answers5 customRadioStyle={customRadioStyle} onOptionChange={handleOptionChange} />
      <div className={styles.EnterNamePageButton}>
        <ButtonColoured
          customButtonStyle={customButtonStyle}
          href="#"
          text="FINISH"
          onClickHandler={handleFinishClick}
        />
        {showError && <QuizError style={{ position: 'absolute', top: '-770px'}}/>}
        <styles></styles>
      </div>
    </div>
  );
}
