import styles from "@/components/MainPageComponents/ExplorePageCover/ExplorePageCover.module.css"
import Header from "@/components/Header"
import MainText from "@/components/MainText"
import ButtonAndBack from "@/components/ButtonAndBack"
import Image from "next/image"
import ButtonColoured from "@/components/mainButton"

export default function ExplorePageCover({
    src="",
    alt="",
    theTitleText,
    theSuppText,
    infoPageLink,
    handleBackToExploreClick
}){
    return(
        <>
            <div className={styles.exploreTopZIndex}>
                <Header src="/icons/Home.svg" width="30" height="32"/>
                <MainText 
                    titleText={theTitleText}
                    supplimentText={theSuppText}
                />
                <div className={styles.exploreStartButton}>
                    <ButtonColoured
                        href={infoPageLink}
                        text="START!"
                        // onClickHandler={}
                    />
                </div>
                {/* <ButtonAndBack
                    linking={infoPageLink} //change later
                    buttonText="START!"
                    buttonColorBg="var(--white)"
                    buttonColorPrimary="var(--green)"
                    backButtonLink="/"
                    handleBackClick={handleBackToExploreClick}
                /> */}
                <div className={styles.exploreCoverImageCenterer}>
                    <Image src={src} alt={alt} width={430} height={932} className={styles.exploreCoverImage}/> 
                </div>
            </div>

        </>
    )
}