import styles from "@/pages/explorePages/reef/Reef.module.css"
import ExplorePageCover from "@/components/MainPageComponents/ExplorePageCover"

export default function reefCover(){
    return(
        <>
            <div className={styles.reefCoverContainer}>
                <ExplorePageCover 
                    src="/images/ReefBG.png" 
                    theTitleText="THE REEF" 
                    theSuppText="Colorful underwater habitats vital for marine life and coastal protection, endangered by coral bleaching and pollution."
                    infoPageLink="/explorePages/reef/reefInfo"
                />
            </div>
        </>
    )
}