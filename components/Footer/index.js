import About from '@/pages/about'
import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer({ handleActionPlannerClick, handleExplorePageClick}){
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <button onClick={handleActionPlannerClick} className={styles.footerButton}>PLAN</button>
                    <button onClick={handleExplorePageClick} className={styles.footerButton}>EXPLORE</button>
                    <Link href="/about">
                        <button className={styles.footerButton}>ABOUT</button>
                    </Link>             
                </div>
            </footer>
        </>
    )
}