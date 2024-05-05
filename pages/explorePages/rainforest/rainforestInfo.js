import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph1 from "@/components/ExplorePageInfoComponents/Graph/BarGraph"
import styles from "./Rainforest.module.css"
import { useState, useEffect } from 'react';

export default function rainforestInfo() {
    return (
        <>
            <Graph1/>
            <ExplorePageInfo sectionTitle="RAINFOREST" 
                pp1="Jaguar, Sloth, Leopard, Toucan owuiaiwual iwiu wi wui bwib eaiea iubeaeuib eia ef bief bea owua ouei eibibfaib ueafif eib eaf iaf a eiaeaf ea b abe bief eaf e eilbeib e " 
                pp2="Preserve rainforests for future" 
                pp3="Tiger, Gorilla, Tapir, Tarsier" 
                pp4="Rainforest life all connects"/>
        </>
    )
}