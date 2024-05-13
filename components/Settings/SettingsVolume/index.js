import styles from "./Volume.module.css"
import { useState } from "react"
import { useTheme } from "@/components/Theme";

export default function Volume() {

    const { theme } = useTheme();
    
    const [value, setValue] = useState(50); 

    const handleSliderChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        event.target.style.backgroundSize = `${newValue}% 100%`;
    };

    const themeStyles = {
        '--volume-background-color': theme === 'dark' ? '#1A1A1A' : '#FFFFFF',
        '--volume-text-color': theme === 'dark' ? '#FFFFFF' : '#000000',
      };

    return (
        <>
            <div className={styles.volumeContainer}>
                <p className={styles.volumeText}>Volume</p>
                <div className={styles.sliderContainer}>
                    <img style={{width: '80%', height: '80%'}} alt="mute icon" src="/images/mute.svg"></img>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="50"
                        value={value}
                        onChange={handleSliderChange}
                        className={styles.slider}
                        style={{
                            background: `linear-gradient(to right, var(--green) 0%, var(--green) ${value}%, transparent ${value}%, transparent 100%)`
                        }}
                        
                    />
                    <img style={{width: '100%', height: '100%'}} alt="full volume icon" src="/images/fullvol.svg"></img>


                </div>
            </div>
        </>
    )
}