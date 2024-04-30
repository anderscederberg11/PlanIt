import styles from "./Interface.module.css"
import React from "react"
import { InterfaceMode } from "../ModeSwitch"

export default function Interface() {

    return(
        <>
            <div className={styles.interfaceContainer}>
                <InterfaceMode property1="default"/>
            </div>
            
        </>
    )
}