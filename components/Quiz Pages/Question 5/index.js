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
    let score = 0; // Initialize score variable
    // Assign scores based on selected options
    switch (value) {
      case 'option1':
        score = 0.5; // Assign score for option1
        break;
      case 'option2':
        score = 1.2; // Assign score for option2
        break;
      case 'option3':
        score = 2.4; // Assign score for option3
        break;
      case 'option4':
        score = 3.2; // Assign score for option4
        break;
      default:
        score = 0; // Default score
        break;
    }
    console.log("Selected answer:", value, "with score:", score);
    handleUserAnswer(5, score); // Updating the quiz's state with the selected answer and its score
  };

  const handleFinishClick = () => {
    if (!selectedOption) {
      setShowError(true); // Show error if no option is selected
    } else {
      console.log("Finish clicked with selection");
      setShowError(false);
      handleQuizCompleteClick(); // Proceed to complete the quiz
    }
  };

  // Uncomment and use if additional logic is needed upon finishing
  // const handleFinishClick = () => {
  //   console.log("FINISH clicked");
  //   handleQuizCompleteClick();
  // };

  return (
    <div>
      <Questions questionText="Do you actively try to conserve energy at home (turning off lights, unplugging devices, etc.)?" />
      <Answers5 customRadioStyle={customRadioStyle} onOptionChange={handleOptionChange} />
      <div className={styles.EnterNamePageButton}>
        <ButtonColoured
          customButtonStyle={customButtonStyle}
          href="#"
          text="FINISH"
          onClickHandler={handleFinishClick} // Directly call or use handleFinishClick if additional logic is needed
        />
        {showError && <QuizError style={{ position: 'absolute', top: '-770px'}}/>}
        <styles></styles>
      </div>
    </div>
  );
}
