import ButtonAndBack from "@/components/ButtonAndBack"
import styles from './quizQuit.module.css'

export default function quizQuit({ onClose }){

    return(
        <div className={styles.widthererContainer}>
            <div className={styles.blurBG}>
                <h3>ARE YOU SURE YOU WANT TO QUIT?</h3>
                <h5>ALL PROGRESS WILL BE LOST</h5>
                <ButtonAndBack
                    linking='/indexCopy' 
                    buttonText='QUIT'
                    handleBackClick={onClose}
                />
                <div className={styles.darkenBG}></div>
            </div>
        </div>

    )
}