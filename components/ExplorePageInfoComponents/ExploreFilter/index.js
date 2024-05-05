import styles from "./ExploreFilter.module.css"
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

export default function ExploreFilter({
    p1,
    p2,
    p3,
    p4,
}) {

    useEffect(() => {
        const firstRadioButton = document.getElementById('c1');
        firstRadioButton.checked = true;
    }, []);

    return(
        <>                
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <input type="radio" name="slide" id="c1" />
                    <label htmlFor="c1" className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.icon}><Image src="/icons/speciesDiversity.svg" width={40} height={40} alt="Species Diversity Icon"/></div>
                            <div className={styles.showinArea}>
                                <h4>Species Diversity</h4>
                                <div className={styles.description}>
                                    <p>{p1}</p>
                                </div>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c2"/>
                    <label htmlFor="c2" className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.icon}><Image src="/icons/habitatPreservation.svg" width={40} height={40} alt="Habitat Preservation Icon"/></div>
                            <div className={styles.showinArea}>
                                <h4>Eco-Preservation</h4>
                                <div className={styles.description}>
                                    <p>{p2}</p>
                                </div>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c3"/>
                    <label htmlFor="c3" className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.icon}><Image src="/icons/endangeredSpecies.svg" width={40} height={40} alt="Endangered Species Icon"/></div>
                            <div className={styles.showinArea}>
                                <h4>Endangered Species</h4>
                                <div className={styles.description}>
                                    <p>{p3}</p>
                                </div>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c4"/>
                    <label htmlFor="c4" className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.icon}><Image src="/icons/ecosystem.svg" width={40} height={40} alt="Ecosystem Icon"/></div>
                            <div className={styles.showinArea}>
                                <h4>Ecosystem</h4>
                                <div className={styles.description}>
                                    <p>{p4}</p>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    )
}