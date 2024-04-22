import styles from "@/components/MainPageComponents/ExplorePageCover/ExplorePageCover.module.css"
import Header from "@/components/Header"
import MainText from "@/components/MainText"
import ButtonAndBack from "@/components/ButtonAndBack"
import Image from "next/image"

export default function ExplorePageCover({
    src="",
    alt="",
    theTitleText,
    theSuppText,
    infoPageLink
}){
    return(
        <>
            <Header src="/icons/Home.svg" width="30" height="32"/>
            <MainText 
                titleText={theTitleText}
                supplimentText={theSuppText}
            />
            <ButtonAndBack
                linking={infoPageLink} //change later
                buttonText="START!"
                buttonColorBg="var(--white)"
                buttonColorPrimary="var(--green)"
                // handleBackClick={""}
            />
            <div className={styles.exploreCoverImageCenterer}>
                <Image src={src} alt={alt} width={430} height={932} className={styles.exploreCoverImage}/> 
            </div>
        </>
    )
}