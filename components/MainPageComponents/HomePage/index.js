import styles from "@/components/MainPageComponents/HomePage/HomePage.module.css"
import Footer from "../../Footer"
import Header from "@/components/Header"
import { useEffect, useState } from "react"

export default function HomePage(){

    const [userTime, setUserTime] = useState([])
    const [timezone, setTimezone] = useState([]);

    var apiKeyInfo = process.env.NEXT_PUBLIC_TIME;
    var url = `https://worldtimeapi.org/api/ip=${apiKeyInfo}`

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setUserTime(data.datetime)
            setTimezone(data.timezone)
            console.log(data);
          })

          const intervalId = setInterval(() => {
            setUserTime(new Date().toISOString());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
      }, [])

      const formatTime = (timeString) => {
        const date = new Date(timeString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return(
        <>
            <Header src="/icons/longArrow.svg" width="31" height="20"/>
            <div className={styles.coolAPIArea}>
                <h5 className={styles.userTime}>{formatTime(userTime)}</h5>
                <h4 className={styles.timeZone}>{timezone}</h4>
            </div>
            <p className={styles.homePagePhrase}>MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</p>
            <Footer/>
        </>
    )
}