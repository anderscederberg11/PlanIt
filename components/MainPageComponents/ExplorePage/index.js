import styles from '@/components/MainPageComponents/ExplorePage/ExplorePage.module.css'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import Link from 'next/link'
import { useExplorePageCovers } from '@/utils/explorePageCovers/explorePageCovers'
import { useState } from "react";
import ArcticCover from '@/pages/explorePages/arctic/arcticCover'
import DesertCover from '@/pages/explorePages/desert/desertCover'
import RainforestCover from '@/pages/explorePages/rainforest/rainforestCover'
import ReefCover from '@/pages/explorePages/reef/reefCover'
import TaigaCover from '@/pages/explorePages/taiga/taigaCover'

export default function ExplorePage(){

    return(
        <>
            <div className={styles.stylesContainerExplorePageWidth}>
                <div className={styles.stylesContainerExplorePage}>
                    <p className={styles.explorePagePhrase}>EXPLORE EARTHS<br></br>AFFECTED AREAS</p>
                    <div className={styles.carouselArea}>
                        <Carousel linking="explorePages/rainforest/rainforestCover" text="RAINFOREST" backgroundImage="/images/Group 42.png"/>
                        <Carousel linking="explorePages/reef/reefCover" text="REEF" backgroundImage="/images/Group 43.png"/>
                        <Carousel linking="explorePages/arctic/arcticCover" text="ARCTIC" backgroundImage="/images/Group 44.png"/>
                        <Carousel linking="explorePages/taiga/taigaCover" text="TAIGA" backgroundImage="/images/Group 45.png"/>
                        <Carousel linking="explorePages/desert/desertCover" text="DESERT" backgroundImage="/images/Group 46.png"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}


// export default function ExplorePage({ }){

//     const {
//         showArcticCover,
//         showDesertCover,
//         showRainforestCover,
//         showReefCover,
//         showTaigaCover,
//         showArctic,
//         showDesert,
//         showRainforest,
//         showReef,
//         showTaiga
//     } = useExplorePageCovers();



//     return(
//         <>
//             <div className={styles.stylesContainerExplorePageWidth}>
//                 <div className={styles.stylesContainerExplorePage}>
//                     {showArctic && <ArcticCover />}
//                     {showDesert && <DesertCover />}
//                     {showRainforest && <RainforestCover />}
//                     {showReef && <ReefCover />}
//                     {showTaiga && <TaigaCover />}
//                     <p className={styles.explorePagePhrase}>EXPLORE EARTHS<br></br>AFFECTED AREAS</p>
//                     <div className={styles.carouselArea}>
//                         <Carousel carouselItemClicked={showRainforestCover} text="RAINFOREST" backgroundImage="/images/Group 42.png"/>
//                         <Carousel carouselItemClicked={showReefCover} text="REEF" backgroundImage="/images/Group 43.png"/>
//                         <Carousel carouselItemClicked={showArcticCover} text="ARCTIC" backgroundImage="/images/Group 44.png"/>
//                         <Carousel carouselItemClicked={showTaigaCover} text="TAIGA" backgroundImage="/images/Group 45.png"/>
//                         <Carousel carouselItemClicked={showDesertCover} text="DESERT" backgroundImage="/images/Group 46.png"/>
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </>
//     )
// }