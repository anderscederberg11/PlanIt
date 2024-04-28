import React, { useState } from "react"
import styles from "./QuizError.module.css"

export default function QuizError({ style }){

    return (
        <>
            <div className={styles.errorContainer} style={style}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="19" viewBox="0 0 34 19" fill="none" className={styles.arrow}>
                    <path d="M2 17L17 2L32 17" stroke="#F2F5EA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 className={styles.errorText}>PLEASE PROVIDE AN ANSWER TO PROCEED</h3>
            </div>
        </>
    )

}