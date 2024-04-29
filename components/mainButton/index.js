import Link from "next/link"
import styles from "@/components/mainButton/mainButton.module.css"
import { useState } from "react";

export default function ButtonColoured({
    href, 
    text,
    bgColor="var(--white)",
    primaryColor="var(--green)",
    onClickHandler
}){
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        console.log("Button Clicked");
        if (onClickHandler) {
            onClickHandler();
        }
    };

    return(
        <>
            <div className={styles.buttonWhole}>
                <Link href={href} passHref>
                    <button 
                        tabIndex={0} 
                        style={{ 
                            backgroundColor: bgColor, 
                        }} 
                        className={`${styles.buttonStyling} ${clicked ? styles.clicked : ''}`} 
                        onMouseDown={() => setClicked(true)}
                        onMouseUp={() => setClicked(false)}
                        onClick={handleButtonClick}
                    >
                        <p style={{ color: primaryColor}} className={styles.buttonText}>
                            {text}
                        </p>
                    </button>
                </Link>
                <div className={styles.buttonLower} style={{ backgroundColor: primaryColor}}/>
            </div>
        </>
    )
}
