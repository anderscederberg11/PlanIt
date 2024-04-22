import styles from "@/components/Header/Header.module.css"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({
    // href,
    src="",
    width="",
    height="",
    handleBackOrHomeClick,
    position = 'absolute'
}){

    const router = useRouter();
    const { name: routerName } = router.query;
    const [name, setName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        } else if (routerName) {
            setName(routerName);
            localStorage.setItem('name', routerName);
        }
    }, [routerName]);

    return(
        <>
            <header className={styles.headerSection} style={{ position }}>
                <div className={styles.Test}>
                    <Link href={""}><Image src={src} width={width} height={height} className={styles.headerSectionIconLeft} onClick={handleBackOrHomeClick}/></Link>
                    <div className={styles.headerSectionWords}>
                        <h1 className={styles.headerSectionH1}>PlanIt</h1>
                        <h4 className={styles.headerSectionH2}>{name}</h4>
                    </div>
                    <div><Image src="/icons/settings.svg" width={40} height={40} className={styles.headerSectionIconRight}/></div>
                </div>
            </header>
        </>
    )
}