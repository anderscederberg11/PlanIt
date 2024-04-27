import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Earth from "@/components/Earth";
import Footer from "@/components/Footer"
import Header from "@/components/Header";
import HeadArea from "@/components/HeadArea";
import LandingPage from "@/components/MainPageComponents/LandingPage";
import EnterName from "@/components/MainPageComponents/EnterName";
import HomePage from "@/components/MainPageComponents/HomePage";
import ActionPlanner from "@/components/MainPageComponents/ActionPlanner";
import ExplorePage from "@/components/MainPageComponents/ExplorePage";
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
    setShowActionPlanner(false);
    setShowExplore(false)
    setShowHomepage(true);
    console.log('4', showLandingPage);
  }

  //header area

  const handleLandingPage = () => {
    setShowHomepage(false)
    setShowLandingPage(true)
  }

  const handleGoHomeFromExplore = () => {
    setShowExplore(false)
    setShowHomepage(true)
  }
  //header area

  //footer area
  const handleExplore = () => {
    setShowHomepage(false);
    setShowExplore(true)
  }

  const handleActionPlannerOnExplore = () => {
    setShowExplore(false)
    setShowActionPlanner(true)
  }

  //footer area

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
          <>
            <Header 
              src="/icons/longArrow.svg" 
              width="31" 
              height="20" 
              handleBackOrHomeClick={handleLandingPage}
            />
            <Footer 
              handleActionPlannerClick={handleActionPlanner}
              handleExplorePageClick={handleExplore}
            />
          </>
        )}
        {showActionPlanner && <ActionPlanner handleGoHomeClick={handleHomePage}/>}


        {showExplore && <ExplorePage handleGoHomeFromExplore={handleHomePage}/>} 
        {/* this no work for the show explore IDK ANYMORE*/}
        {showExplore && (
          <>
          <Header 
            src="/icons/Home.svg" 
            width="30" 
            height="32" 
            handleBackOrHomeClick={handleGoHomeFromExplore}/>
          <Footer
            handleActionPlannerClick={handleActionPlannerOnExplore}
          />
          </>
        )}

        

        {/* {showLandingPage && (
          <Question5 handleQuizCompleteClick={handleQuizComplete} />
        )}
        {showQuizComplete && <QuizComplete/>} */}
        <Earth/>
      </main>
    </>
  );
}
