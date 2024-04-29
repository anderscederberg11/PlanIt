import ButtonColoured from "../../mainButton"
import styles from "@/components/MainPageComponents/LandingPage/LandingPage.module.css"

export default function LandingPage({ handleGetStartedClick, handleStartTutorialClick }){
    return(
        <>
            <h1 className={styles.logoPlanit}>PlanIt</h1>
            <h5 className={styles.catchphrase}>YOUR ACTIONS, OUR FUTURE: <br></br> MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</h5>
            <div className={styles.LandingPageButtons}>
                <ButtonColoured 
                    href=""
                    text="GET STARTED"
                    onClickHandler={handleGetStartedClick}
                />
                <div className={styles.LandingPageButtonsSpacer}/>
                <ButtonColoured 
                    href=""
                    text="QUICK TUTORIAL" 
                    bgColor="var(--black)" 
                    primaryColor="var(--white)"
                    onClickHandler={handleStartTutorialClick}
                />
            </div>         
        </>
    )
}