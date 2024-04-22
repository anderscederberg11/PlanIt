import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Earth from "@/components/Earth";
import Footer from "@/components/Footer"
import HeadArea from "@/components/HeadArea";
import LandingPage from "@/components/MainPageComponents/LandingPage";
import EnterName from "@/components/MainPageComponents/EnterName";
import HomePage from "@/components/MainPageComponents/HomePage";
import ActionPlanner from "@/components/MainPageComponents/ActionPlanner";
import QuizComplete from "@/components/Quiz Pages/QuizComplete";
import Question5 from "@/components/Quiz Pages/Question 5";



export default function Home() {

  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showEnterName, setShowEnterName] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showActionPlanner, setShowActionPlanner] = useState(false);
  const [showQuizComplete, setShowQuizComplete] = useState(false)

  const handleGetStarted = () => {
    setShowLandingPage(false); // Hide LandingPage component
    setShowEnterName(true); // Show EnterName component
    console.log('1', showLandingPage);
  };

  const handleContinue = () => {
    setShowEnterName(false);
    setShowHomepage(true);
    console.log('2', showLandingPage);
  }

  const handleActionPlanner = () => {
    setShowHomepage(false);
    setShowActionPlanner(true)
    console.log('3', showLandingPage);
  }

  const handleHomePage = () => {
    console.log("handle triggered")
    setShowActionPlanner(false)
    setShowHomepage(true);
    console.log('4', showLandingPage);
  }

  const handleQuizComplete = () => {
    setShowLandingPage(false)
    setShowQuizComplete(true)
    console.log("working correctly")
  }

  return (
    <>
      <HeadArea title="Welcome to Planit!" description="We are an environment app raising awareness on earths most pressing issues"/>
      <main className={`${styles.main}`}>
        {showLandingPage && (
          <LandingPage handleGetStartedClick={handleGetStarted}/>
        )}
        {showEnterName && <EnterName/>} 
        {/* this renders the page so if you want to rerender it from another page using back, you dont add this line again. */}

        {showEnterName && (
          <EnterName handleContinueClick={handleContinue}/>
        )}
        {showHomepage && <HomePage/>}
        
        {showHomepage && (
          <Footer handleActionPlannerClick={handleActionPlanner}/>
        )}
        {showActionPlanner && <ActionPlanner/>}

        {/* {showLandingPage && (
          <Question5 handleQuizCompleteClick={handleQuizComplete} />
        )}
        {showQuizComplete && <QuizComplete/>} */}

        <Earth/>
      </main>
    </>
  );
}
