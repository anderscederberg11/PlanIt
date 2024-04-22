import styles from "./MainText.module.css"

export default function MainText({ 
    titleText="", 
    supplimentText=""
 }) {
    return(
        <>
            <div className={styles.textContainer}>
                <h2 className={styles.pageHeader}>{titleText}</h2>
                <p className={styles.pagePara}>{supplimentText}</p>
            </div>
        </>
    )
}