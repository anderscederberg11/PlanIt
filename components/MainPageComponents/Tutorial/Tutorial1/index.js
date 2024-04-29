import EnterName from "@/components/EnterName";
import styles from "./Tutorial1.module.css"
import ButtonColoured from "@/components/mainButton";


export default function Tutorial1({ handleNextTutorialClick }) {
    return(
        <>
            <div className={styles.tutorial1Width}>
                <div className={styles.entirePageBlur}>
                    <div className={styles.arrowContainer}>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                    </div>
                    <h4>ENTER YOUR NAME TO GET STARTED</h4>
                    <ButtonColoured
                        href=""
                        text="CONTINUE"
                        primaryColor="var(--black)"
                        onClickHandler={handleNextTutorialClick}
                    />
                </div>
            </div>
            <EnterName/>
        </>
    )
}