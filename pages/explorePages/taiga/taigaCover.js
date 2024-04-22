import styles from "@/pages/explorePages/taiga/Taiga.module.css"
import ExplorePageCover from "@/components/MainPageComponents/ExplorePageCover"

export default function taigaCover(){
    return(
        <>
            <div className={styles.taigaCoverContainer}>
                <ExplorePageCover 
                    src="/images/TaigaBG.png" 
                    theTitleText="THE TAIGA" 
                    theSuppText="Cold coniferous forests essential for carbon storage, at risk from deforestation and wildfires."
                    infoPageLink="/explorePages/taiga/taigaInfo"
                />
            </div>
        </>
    )
}