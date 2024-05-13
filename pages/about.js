import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import styles from "@/styles/About.module.css";

export default function About(){
    return(
        <>
            <HeadArea title="About Us" description="We are Sebastian and Anders"/>
            <main className={styles.mainContainer}>
                <Header src="/icons/Home.svg" width="30" height="32" href="/indexCopy"/>
                <div className={styles.aboutContainer}>
                    <div className={styles.sebMainImage}>
                        <img style={{width: '100%', height: '100%'}} alt="Astronaut in orange suit" src='/images/sebastro.png' />
                    </div>
                    <div className={styles.sebTextContainer}>
                        <h3 className={styles.sebName}>SEBASTIAN FOK</h3>
                        <p className={styles.sebFavourites}>
                            <span className={styles.favourite}>Favorite...</span><br></br>
                            Software: Blender 3D<br></br>
                            Animal: Crab<br></br>
                            Eco Brand: NEXTWORKERZ<br></br>
                            Design Inspo: Brutalism<br></br>
                            Icon: Home Button
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="383" height="482" viewBox="0 0 383 482" fill="none">
                            <g filter="url(#filter0_b_1065_159)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M201 101C201 145.183 236.817 181 281 181L301.5 181C345.683 181 381.5 216.817 381.5 261L381.5 401C381.5 445.183 345.683 481 301.5 481H81.0002C36.8174 481 1.00023 445.183 1.00021 401L1.00004 81.0586C1.00001 81.0391 1 81.0195 1 81V41C1 18.9086 18.9086 1 41 1H80.975C80.9834 1 80.9917 1 81 1L88.029 1H161C183.091 1 201 18.9086 201 41V81C201 81.0288 201 81.0577 201 81.0865L201 101Z" fill="#0C0C0C" fill-opacity="0.7"/>
                                <path d="M281 181L281 182L281 182L281 181ZM201 101L202 101L202 101L201 101ZM301.5 181L301.5 180L301.5 180L301.5 181ZM381.5 261L382.5 261L382.5 261L381.5 261ZM381.5 401L380.5 401L380.5 401L381.5 401ZM1.00021 401L0.000209806 401L1.00021 401ZM1.00004 81.0586L2.00004 81.0586L2.00004 81.0572L1.00004 81.0586ZM80.975 1L80.975 2L80.9753 2L80.975 1ZM81 1L81 0H81V1ZM88.029 1L88.029 2H88.029V1ZM201 81.0865L200 81.0844L200 81.0865L201 81.0865ZM281 180C237.369 180 202 144.63 202 101H200C200 145.735 236.265 182 281 182L281 180ZM301.5 180L281 180L281 182L301.5 182L301.5 180ZM382.5 261C382.5 216.265 346.235 180 301.5 180L301.5 182C345.131 182 380.5 217.369 380.5 261L382.5 261ZM382.5 401L382.5 261L380.5 261L380.5 401L382.5 401ZM301.5 482C346.235 482 382.5 445.735 382.5 401L380.5 401C380.5 444.631 345.131 480 301.5 480V482ZM81.0002 482H301.5V480H81.0002V482ZM0.000209806 401C0.00023327 445.735 36.2652 482 81.0002 482V480C37.3697 480 2.00023 444.631 2.00021 401L0.000209806 401ZM4.1992e-05 81.0586L0.000209806 401L2.00021 401L2.00004 81.0586L4.1992e-05 81.0586ZM2.00004 81.0572C2.00001 81.0381 2 81.0191 2 81H0C0 81.02 1.43429e-05 81.04 4.30198e-05 81.06L2.00004 81.0572ZM2 81V41H0V81H2ZM2 41C2 19.4609 19.4609 2 41 2V3.8147e-06C18.3563 3.8147e-06 0 18.3563 0 41H2ZM41 2H80.975V3.8147e-06H41V2ZM81 0C80.9916 0 80.9832 1.28255e-06 80.9747 3.86136e-06L80.9753 2C80.9836 2 80.9918 2 81 2V0ZM88.029 3.8147e-06L81 0L81 2L88.029 2L88.029 3.8147e-06ZM88.029 2H161V3.8147e-06H88.029V2ZM161 2C182.539 2 200 19.4609 200 41H202C202 18.3563 183.644 3.8147e-06 161 3.8147e-06V2ZM200 41V81H202V41H200ZM200 81C200 81.0281 200 81.0563 200 81.0844L202 81.0886C202 81.0591 202 81.0295 202 81H200ZM202 101L202 81.0865L200 81.0865L200 101L202 101Z" fill="#343434"/>
                            </g>
                            <defs>
                                <filter id="filter0_b_1065_159" x="-5" y="-5" width="392.5" height="492" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"/>
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1065_159"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1065_159" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.sebCircleContainer}>
                        <img style={{width: '100%', height: '100%'}} alt="Astronaut in orange suit" src='/images/sebastro3.png' />  
                    </div>
                    <div className={styles.sebPillContainer}>
                        <img style={{width: '100%', height: '100%'}} alt="Astronaut in orange suit" src='/images/sebasstro2.png' />  
                    </div>
                    <div className={styles.andersContainer}>
                        <div className={styles.andersMain}>
                            <img style={{width: '100%', height: '100%'}} alt="Anders B&W Standing" src='/images/andersmain.png' />  
                        </div>
                        <div className={styles.andersCircle}>
                            <img style={{width: '100%', height: '100%'}} alt="Anders listening to music" src='/images/anderscircle.png' />  
                        </div>
                        <div className={styles.andersTextContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="282" height="462" viewBox="0 0 282 462" fill="none">
                                <g filter="url(#filter0_b_1065_163)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41 1C18.9086 1 1 18.9086 1 41V81C1 82.8371 1.12385 84.6453 1.36365 86.4167C1 96.5298 1 108.617 1 123.5V186C1 219.137 27.8629 246 61 246C94.1371 246 121 272.863 121 306V381C121 425.183 156.817 461 201 461C245.183 461 281 425.183 281 381V129C281 112.176 281 98.5103 280.538 87.0976C280.842 85.1095 281 83.0731 281 81V41C281 18.9086 263.091 1 241 1H41Z" fill="#0C0C0C" fill-opacity="0.7"/>
                                    <path d="M1.36365 86.4167L2.363 86.4526L2.36607 86.3672L2.35461 86.2825L1.36365 86.4167ZM61 246V247V246ZM201 461V462V461ZM280.538 87.0976L279.55 86.9464L279.535 87.0417L279.539 87.138L280.538 87.0976ZM2 41C2 19.4609 19.4609 2 41 2V0C18.3563 0 0 18.3563 0 41H2ZM2 81V41H0V81H2ZM2.35461 86.2825C2.12081 84.5555 2 82.7921 2 81H0C0 82.8821 0.126884 84.7351 0.372688 86.5508L2.35461 86.2825ZM0.364295 86.3807C-0.000142455 96.5158 0 108.624 0 123.5H2C2 108.611 2.00014 96.5438 2.363 86.4526L0.364295 86.3807ZM0 123.5V186H2V123.5H0ZM0 186C0 219.689 27.3106 247 61 247V245C28.4152 245 2 218.585 2 186H0ZM61 247C93.5848 247 120 273.415 120 306H122C122 272.311 94.6894 245 61 245V247ZM120 306V381H122V306H120ZM120 381C120 425.735 156.265 462 201 462V460C157.369 460 122 424.631 122 381H120ZM201 462C245.735 462 282 425.735 282 381H280C280 424.631 244.63 460 201 460V462ZM282 381V129H280V381H282ZM282 129C282 112.183 282 98.4946 281.537 87.0572L279.539 87.138C280 98.5261 280 112.169 280 129H282ZM280 81C280 83.0224 279.846 85.0081 279.55 86.9464L281.527 87.2488C281.838 85.2108 282 83.1239 282 81H280ZM280 41V81H282V41H280ZM241 2C262.539 2 280 19.4609 280 41H282C282 18.3563 263.644 0 241 0V2ZM41 2H241V0H41V2Z" fill="#343434"/>
                                </g>
                                <defs>
                                    <filter id="filter0_b_1065_163" x="-5" y="-5" width="292" height="472" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"/>
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1065_163"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1065_163" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                            <h3 className={styles.andersName}>ANDERS CEDERBERG</h3>
                            <p className={styles.andersFavourites}>
                                <span className={styles.favourite2}>Favorite...</span><br></br>
                                Eco Brand: Arcteryx<br></br>
                                Design Inspo: Minimalism<br></br>
                                Software: Illustrator<br></br> 
                                Animal: Shark<br></br>
                                Icon: Profile<br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}