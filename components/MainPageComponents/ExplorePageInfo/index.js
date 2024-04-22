import styles from "@/components/MainPageComponents/ExplorePageInfo/ExplorePageInfo.module.css"
import Header from "@/components/Header"
import Graph from "@/components/ExplorePageInfoComponents/Graph/LineGraph"

export default function ExplorePageInfo({
    sectionTitle,
}){
    return(
        <>
            <div className={styles.entirePageInfo}>
                <div className={styles.entirePageInfoCenterer}>
                    <Header src="/icons/longArrow.svg" width="31" height="20" handleBackOrHomeClick={""}/>
                    <div className={styles.sectionTitleCenterer}>
                        <h2>{sectionTitle}</h2>
                    </div>
                </div>
            </div>

        </>
    )
}