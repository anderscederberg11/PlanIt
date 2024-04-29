import HomePage from "../../HomePage";
import styles from "./Tutorial2.module.css"
import ButtonColoured from "@/components/mainButton";
import Footer from "@/components/Footer";


export default function Tutorial2({ handleCompleteTutorialClick }) {
    return(
        <>
            <div className={styles.tutorial1Width}>
                <div className={styles.entirePageBlur}>
                    <div className={styles.Tutorial2Spacer}></div>
                    <ButtonColoured
                        href=""
                        text="FINISH!"
                        primaryColor="var(--black)"
                        onClickHandler={handleCompleteTutorialClick}
                    />
                    <h4>USE THE NAVBAR TO ACCESS OUR MAIN FEATURES </h4>
                    <div className={styles.arrowContainer}>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                    </div>
                </div>
            </div>
            <HomePage/>
            <Footer/>
        </>
    )
}