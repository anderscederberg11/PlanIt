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
import Tutorial1 from "@/components/MainPageComponents/Tutorial/Tutorial1";
import Tutorial2 from "@/components/MainPageComponents/Tutorial/Tutorial2";
import About from "./about";
import { entireNavigation } from "@/utils/entireNavigation";



export default function Home() {

  const {
    handleGetStarted,
    handleStartTutorial,
    handleStartTutorial2,
    handleLandingPageAfterTutorial,
    handleContinue,
    handleActionPlanner,
    handleHomePage,
    handleLandingPage,
    handleGoHomeFromExplore,
    handleGoHomeFromAbout,
    handleExplore,
    handleActionPlannerOnExplore,
    handleAboutButtonClick,
    showLandingPage,
    showEnterName,
    showHomepage,
    showExplore,
    showActionPlanner,
    showTutorial1,
    showTutorial2,
    showAboutPage,
    animateEarth1
  } = entireNavigation();

  return (
    <>
      <HeadArea title="Welcome to Planit!" description="We are an environment app raising awareness on earths most pressing issues"/>
      <main className={`${styles.main}`}>
        {showLandingPage && (
          <LandingPage 
            handleGetStartedClick={handleGetStarted}
            handleStartTutorialClick={handleStartTutorial}
          />
        )}

        {showTutorial1 && (
          <Tutorial1
            handleNextTutorialClick={handleStartTutorial2}
          />
        )}

        {showTutorial2 && (
          <Tutorial2
            handleCompleteTutorialClick={handleLandingPageAfterTutorial}
          />
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
              handleAboutButtonClick={handleAboutButtonClick} 
            />
          </>
        )}

        {showExplore && (
          <>
          <Header 
            src="/icons/Home.svg" 
            width="30" 
            height="32" 
            handleBackOrHomeClick={handleGoHomeFromExplore}/>
          <Footer
            handleActionPlannerClick={handleActionPlannerOnExplore}
            handleExplorePageClick={handleExplore}
            handleAboutButtonClick={handleAboutButtonClick} 
          />
          </>
        )}
        {/* FOOTER */}
          {showActionPlanner && <ActionPlanner handleGoHomeClick={handleHomePage}/>}
          {showExplore && <ExplorePage handleGoHomeFromExplore={handleHomePage}/>} 
          {showAboutPage && <About handleGoHomeClickFromAbout={handleGoHomeFromAbout}/>}
        {/* FOOTER */}


        {/* EXPLORE */}


        {/* EXPLORE */}

        <Earth animateEarth={animateEarth1}/>
      </main>
    </>
  );
}
