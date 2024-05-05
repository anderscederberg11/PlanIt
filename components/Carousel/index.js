import styles from '@/components/Carousel/Carousel.module.css'
import { useState } from 'react';
import Link from 'next/link';

export default function Carousel({
    linking="",
    text,
    backgroundImage,
    carouselItemClicked
}){
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        console.log('Button clicked Again');
        if (carouselItemClicked){
            carouselItemClicked();
        }
    };

    return(
        <>
            <div className={styles.buttonWhole}>
                <Link href={linking}>
                    <button
                        className={`${styles.buttonStyling} ${clicked ? styles.clicked : ''}`} 
                        onMouseDown={() => setClicked(true)}
                        onMouseUp={() => setClicked(false)}
                        style={{ backgroundImage: `url('${backgroundImage}')` }}
                        onClick={handleClick}
                    >
                        <p className={styles.buttonText}>
                            {text}
                        </p>
                    </button>
                    <div className={styles.buttonLower}/>
                </Link>
            </div>
        </>
    )
}