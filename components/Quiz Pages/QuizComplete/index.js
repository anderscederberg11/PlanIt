import React from 'react';
import styles from "./QuizComplete.module.css";

export default function QuizComplete({ score }) {  // Accept score as a prop
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
                <h2 className={styles.category}>PLACEHOLDER</h2>
            </div>
        </>
    )
}
