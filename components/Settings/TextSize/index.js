import { useState } from "react"
import styles from "./TextSize.module.css"

export default function TextSize() {
    
    const [selectedSize, setSelectedSize] = useState('medium');
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