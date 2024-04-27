import React from 'react';
import ButtonColoured from '@/components/mainButton';
import styles from "./QuizComplete.module.css";

export default function QuizComplete({ score }) {  // Accept score as a prop

    let category;
    let categoryMessage;

    if (score >= 1.5 && score < 4.4) {
        category = "ENVIRONMENTALIST";
        categoryMessage = "Keep it up, you're doing great!";
    } else if (score >= 4.4 && score < 7.3) {
        category = "CLIMATE ADVOCATE";
        categoryMessage = "Your efforts are making a positive impact!";
    } else if (score >= 7.4 && score < 10.2) {
        category = "GREEN LEARNER";
        categoryMessage = "Keep exploring ways to reduce your footprint!";
    } else if (score >= 10.2 && score < 13.1) {
        category = "ECO-CURIOUS";
        categoryMessage = "You're on a journey to a greener lifestyle!";
    } else {
        category = "CLIMATE NOVICE";
        categoryMessage = "Plenty of room for improvement, every effort counts!";
    }
    
    return(
        <>
            <div className={styles.completeContainer}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.complete}>COMPLETE</h1>
                    <img src="/images/completecheck.png" width={40} height={40} alt="Complete Check"></img>
                </div>
                <p className={styles.completePara}>Based on your responses, we've calculated your estimated carbon footprint and identified areas where you can make positive changes to reduce it.</p>
                <h2 className={styles.yourFootprint}>YOUR ESTIMATED CARBON FOOTPRINT:</h2>
                <div className={styles.scoreContainer}>
                    <div className={styles.scoreElement}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
                            <circle cx="70" cy="70" r="68" stroke="#0BAA81" strokeWidth="4"/>
                        </svg>
                        <h1 className={styles.scoreText}>{score.toFixed(1)}</h1>
                        <h4 className={styles.metric}>METRIC TONS OF CO2 PER YEAR</h4>
                    </div>
                </div>
                <h2 className={styles.category}>Your Environmental Identity: <span className={styles.categoryText}>{category}</span></h2>
                <p className={styles.categoryMessage}>{categoryMessage}</p>
            </div>
            <div className={styles.backgroundBlur}></div>
            <div className={styles.homeButton}>
                <ButtonColoured 
                    href={{
                        pathname: '/',
                    }}
                    text="HOME"
                />
            </div>
        </>
    )
}
