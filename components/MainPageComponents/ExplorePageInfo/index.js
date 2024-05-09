import styles from "@/components/MainPageComponents/ExplorePageInfo/ExplorePageInfo.module.css"
import Header from "@/components/Header"
import ExploreFilter from "@/components/ExplorePageInfoComponents/ExploreFilter";
import { useState, useEffect } from 'react';

export default function ExplorePageInfo({
    sectionTitle,
    pp1="Lorem posum dolor siet ameit",
    pp2="Lorem posum dolor siet ameit",
    pp3="Lorem posum dolor siet ameit",
    pp4="Lorem posum dolor siet ameit",
    handleBackToHomeClick
}){

    return(
        <>
            <div className={styles.entirePageInfo}>
                <div className={styles.entirePageInfoCenterer}>
                    <Header src="/icons/Home.svg" width="30" height="32" href="/indexCopy"/>
                    <div className={styles.innerContainer}>
                        <div className={styles.arrowContainer}>
                            <div className={styles.arrow}></div>
                            <div className={styles.arrow}></div>
                            <div className={styles.arrow}></div>
                        </div>
                        <div className={styles.sectionTitleCenterer}>
                            <h2>{sectionTitle}</h2>
                        </div>
                        <div className={styles.categorySelectionArea}>
                            <ExploreFilter p1={pp1} p2={pp2} p3={pp3} p4={pp4}/>
                            <div className={styles.categorySelectionAreaHideArrow}></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}