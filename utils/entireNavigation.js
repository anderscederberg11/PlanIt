import { useState } from "react";

export function entireNavigation(){

    const [showLandingPage, setShowLandingPage] = useState(true);
    const [showEnterName, setShowEnterName] = useState(false);
    const [showHomepage, setShowHomepage] = useState(false);
    const [showExplore, setShowExplore] = useState(false);
    const [showActionPlanner, setShowActionPlanner] = useState(false);
    const [showTutorial1, setShowTutorial1] = useState(false);
    const [showTutorial2, setShowTutorial2] = useState(false);
    const [showAboutPage, setShowAboutPage] = useState(false);
  
    const [animateEarth1, setAnimateEarth1] = useState(false);
  
    //Landing page
    const handleGetStarted = () => {
      setShowLandingPage(false); // Hide LandingPage component
      setShowEnterName(true); // Show EnterName component
      console.log('1', showLandingPage);
    };
  
    const handleStartTutorial = () => {
      setShowLandingPage(false); 
      setShowTutorial1(true)
    }
  
    const handleStartTutorial2 = () => {
      setShowTutorial1(false)
      setShowTutorial2(true)
    }
  
    const handleLandingPageAfterTutorial = () => {
      setShowTutorial2(false)
      setShowLandingPage(true)
    }
    //Landing Page
  
    const handleContinue = () => {
      setAnimateEarth1(true); //earth animation to middle
      setShowEnterName(false);
      setShowHomepage(true);
    }
  
    const handleActionPlanner = () => {
      setShowHomepage(false);
      setShowActionPlanner(true)
    }
  
    const handleHomePage = () => {
      setShowActionPlanner(false);
      setShowExplore(false)
      setShowHomepage(true);
    }
  
    //header area
    const handleLandingPage = () => {
      setShowHomepage(false)
      setShowLandingPage(true)
      // setAnimateEarth1(false); //earth SHOULD animation back to original 
    }
  
    const handleGoHomeFromExplore = () => {
      setShowExplore(false)
      setShowHomepage(true)
    }
  
    const handleGoHomeFromAbout = () => {
      setShowHomepage(true);
      setShowAboutPage(false)
    }; //----------------------------------------------------------------------------------------------------------------------
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
  
    const handleAboutButtonClick = () => {
      setShowAboutPage(true);
      setShowHomepage(false)
    };
    //footer area

    return{
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
    }
}