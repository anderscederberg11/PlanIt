import styles from "./Settings.module.css"
import React from "react"
import Volume from "./SettingsVolume"
import TextSize from "./TextSize"
import Interface from "./Interface"
import { useTheme } from "../Theme"
import { useState } from "react"
import { Voice } from "./Voice"

export default function Settings({ onClose }) {

    const { theme } = useTheme();

    const themeStyles = {
        '--background-color': theme === 'dark' ? '#000000' : '#F2F5EA', // Only the background changes
        '--text-color': theme === 'dark' ? '#FFFFFF' : '#0C0C0C', // Only change non-white text
    };

    // const [showSettings, setShowSettings] = useState(true);
    
    return(
        <>
            <div className={styles.mainContainer} style={themeStyles}>
                <div className={styles.blur}>
                    <div className={styles.settingsContainer}>
                        <div className={styles.settingsHeader}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="8" 
                                height="14" 
                                viewBox="0 0 8 14" 
                                fill="none" 
                                className={styles.backArrow}
                                onClick={onClose}
                            >
                                <path d="M7 1L1 7L7 13" stroke="#0BAA81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className={styles.settingsText}>Settings</p>
                            <Volume/>
                            <TextSize/>
                            <Interface/>
                            <Voice
                                divClassName="design-component-instance-node"
                                imagesOffWhite="/images/off-white.svg"
                                imagesOffWhiteClassName="voice-2"
                                imagesOnGrey="/images/on-grey.svg"
                                overlapGroupClassName="voice-instance"
                                property1="default"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}