import styles from '@/components/MainPageComponents/ExplorePage/ExplorePage.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function ExplorePage({ }){

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
//ExplorePages/rainforest/rainforestCover
//<Link href="explorePages/rainforest/rainforestCover"><Carousel linking="" text="RAINFOREST" backgroundImage="/images/Group 42.png"/></Link>