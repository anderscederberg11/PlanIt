import React from "react";
import Questions from "@/components/Questions";
import Answers5 from "@/components/Quiz Components/Radio Answers/Answers 5";
import ButtonColoured from "@/components/mainButton";
import styles from '@/components/MainPageComponents/EnterName/EnterName.module.css'

export default function Question5({ handleQuizCompleteClick }) {
  const customRadioStyle = {
    marginTop: '427px',
  };

  //   const handleFinishClick = () => {
  //   console.log("FINISH clicked");
  //   handleQuizCompleteClick();
  // };

  return (
    <div>
      <Questions questionText="Do you actively try to conserve energy at home (turning off lights, unplugging devices, etc.)?" />
      <Answers5 customRadioStyle={customRadioStyle} />
      <div className={styles.EnterNamePageButton}>
        {/* This is just from the enterName to copy the css from there */}
        <ButtonColoured
          href="/"
          text="FINISH"
          onClickHandler={handleQuizCompleteClick}
        />
      </div>
    </div>
  );
}


