import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import styles from "@/styles/About.module.css";

export default function About(){
    return(
        <>
            <HeadArea title="About Us" description="We are Sebastian and Anders"/>
            <main className={`${styles.main} `}>
                <Header src="/icons/Home.svg" width="30" height="32"/>
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
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M201 101C201 145.183 236.817 181 281 181H301.5C345.683 181 381.5 216.817 381.5 261L381.5 401C381.5 445.183 345.683 481 301.5 481H81.0002C36.8174 481 1.00023 445.183 1.00021 401L1.00004 81.0586C1.00001 81.0391 1.00004 81.0196 1.00004 81L1 41C1 18.9086 18.9086 1 41 1H80.975C80.9834 1 80.9917 1 81 1L121 1.00002C165.183 1.00005 201 36.8172 201 81V81.0865" fill="#0C0C0C" fill-opacity="0.7"/>
                                    <path d="M281 181L281 180L281 180L281 181ZM201 101L202 101L202 101L201 101ZM301.5 181L301.5 182L301.5 182L301.5 181ZM381.5 261L382.5 261L382.5 261L381.5 261ZM381.5 401L380.5 401L380.5 401L381.5 401ZM1.00021 401L0.000209806 401L1.00021 401ZM1.00004 81.0586L2.00004 81.0586L2.00004 81.0572L1.00004 81.0586ZM1.00004 81L2.00004 81L2.00004 81L1.00004 81ZM1 41L0 41L0 41L1 41ZM81 1L81 0H81V1ZM121 1.00002L121 2.09808e-05L121 2.09808e-05L121 1.00002ZM201 81.0865L200 81.0865L200 81.0865L201 81.0865ZM281 180C237.369 180 202 144.63 202 101H200C200 145.735 236.265 182 281 182L281 180ZM301.5 180H281V182H301.5V180ZM382.5 261C382.5 216.265 346.235 180 301.5 180L301.5 182C345.131 182 380.5 217.369 380.5 261L382.5 261ZM382.5 401L382.5 261L380.5 261L380.5 401L382.5 401ZM301.5 482C346.235 482 382.5 445.735 382.5 401L380.5 401C380.5 444.631 345.131 480 301.5 480V482ZM81.0002 482H301.5V480H81.0002V482ZM0.000209806 401C0.00023327 445.735 36.2652 482 81.0002 482V480C37.3697 480 2.00023 444.631 2.00021 401L0.000209806 401ZM4.1992e-05 81.0586L0.000209806 401L2.00021 401L2.00004 81.0586L4.1992e-05 81.0586ZM2.00004 81.0572C2.00001 81.0385 2.00004 81.0216 2.00004 81L4.19613e-05 81C4.1928e-05 81.0176 1.38619e-05 81.0397 4.3017e-05 81.06L2.00004 81.0572ZM2.00004 81L2 41L0 41L4.19613e-05 81L2.00004 81ZM2 41C2 19.4609 19.4609 2 41 2V3.8147e-06C18.3563 3.8147e-06 0 18.3563 0 41H2ZM41 2H80.975V3.8147e-06H41V2ZM81 0C80.9957 0 80.9915 9.84192e-07 80.9873 1.93351e-06C80.9831 2.89154e-06 80.9791 3.8147e-06 80.975 3.8147e-06V2C80.9793 2 80.9836 2 80.9878 2C80.992 2 80.996 2 81 2V0ZM121 2.09808e-05L81 0L81 2L121 2.00002L121 2.09808e-05ZM202 81C202 36.2649 165.735 4.60863e-05 121 2.09808e-05L121 2.00002C164.63 2.00005 200 37.3695 200 81H202ZM202 81.0865V81H200V81.0865H202ZM200 81.0865L200 101L202 101L202 81.0865L200 81.0865Z" fill="#343434" className={styles.sebShape}/>
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
                    <div className={styles.sebCircleContainer}>
                            
                    </div>
                    <div className={styles.separator}></div>
                </div>
            </main>
        </>
    )
}