import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageCover from "@/components/MainPageComponents/ExplorePageCover"

export default function rainforestCover(){
    return(
        <>
            <div className={styles.rainforestCoverContainer}>
                <ExplorePageCover 
                    src="/images/RainforestBG.png" 
                    theTitleText="THE RAINFOREST" 
                    theSuppText="Dense tropical ecosystems crucial for biodiversity and climate regulation, threatened by deforestation and climate change."
                    infoPageLink="/explorePages/rainforest/rainforestInfo"
                />
            </div>
        </>
    )
}