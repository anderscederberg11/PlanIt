import { useState } from "react"
import styles from "./TextSize.module.css"
import { useTheme } from "@/components/Theme";

export default function TextSize() {

    const { theme } = useTheme();
    
    const [selectedSize, setSelectedSize] = useState('medium');

    const themeStyles = {
        '--size-background-color': theme === 'dark' ? '#1A1A1A' : '#FFFFFF',
        '--size-text-color': theme === 'dark' ? '#FFFFFF' : '#000000',
      };
    
    return(
        <>
            <div className={styles.sizeContainer}>
                <p className={styles.sizeText}>Text Size</p>
                <div className={styles.textButtons}>
                    <button className={`${styles.small} ${selectedSize === 'small' ? styles.selected : ''}`}
                        onClick={() => setSelectedSize('small')}>Aa</button>
                    <button className={`${styles.medium} ${selectedSize === 'medium' ? styles.selected : ''}`}
                        onClick={() => setSelectedSize('medium')}>Aa</button>
                    <button className={`${styles.large} ${selectedSize === 'large' ? styles.selected : ''}`}
                        onClick={() => setSelectedSize('large')}>Aa</button>
                </div>

            </div>
        </>
    )
}