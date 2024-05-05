import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph1 from "@/components/ExplorePageInfoComponents/Graph/BarGraph"
import styles from "./Rainforest.module.css"
import { useState, useEffect } from 'react';

export default function rainforestInfo() {
    return (
        <>
            <Graph1/>
            <ExplorePageInfo sectionTitle="RAINFOREST" 
                pp1="Rainforests are home to over half of the world's plant and animal species." 
                pp2="Deforestation rates are alarming - an area equivalent to 48 football fields is lost every minute." 
                pp3="Sumatran orangutans face extinction due to habitat loss and poaching." 
                pp4="Rainforests play a crucial role in regulating the Earth's climate by absorbing carbon dioxide."/>
        </>
    )
}