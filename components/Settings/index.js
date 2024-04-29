import styles from "./Settings.module.css"
import React from "react"

export default function Settings() {
    
    return(
        <>
            <div className={styles.mainContainer}>
                <div className={styles.blur}>
                    <div className={styles.settingsContainer}>
                        <div className={styles.settingsHeader}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none" className={styles.backArrow}>
                                <path d="M7 1L1 7L7 13" stroke="#0BAA81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className={styles.settingsText}>Settings</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}