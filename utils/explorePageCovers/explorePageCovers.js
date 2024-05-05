import { useState } from "react";

export function useExplorePageCovers(){

    const [showArctic, setShowArctic] = useState(false);
    const [showDesert, setShowDesert] = useState(false);
    const [showRainforest, setShowRainforest] = useState(false);
    const [showReef, setShowReef] = useState(false);
    const [showTaiga, setShowTaiga] = useState(false);

    const showArcticCover = () => {
        setShowArctic(true)
        setShowDesert(false)
        setShowRainforest(false)
        setShowReef(false)
        setShowTaiga(false)
    }

    const showDesertCover = () => {
        setShowArctic(false)
        setShowDesert(true)
        setShowRainforest(false)
        setShowReef(false)
        setShowTaiga(false)
    }

    const showRainforestCover = () => {
        setShowArctic(false)
        setShowDesert(false)
        setShowRainforest(true)
        setShowReef(false)
        setShowTaiga(false)
    }

    const showReefCover = () => {
        setShowArctic(false)
        setShowDesert(false)
        setShowRainforest(false)
        setShowReef(true)
        setShowTaiga(false)
    }

    const showTaigaCover = () => {
        setShowArctic(false)
        setShowDesert(false)
        setShowRainforest(false)
        setShowReef(false)
        setShowTaiga(true)
    }

    return {
        showArcticCover,
        showDesertCover,
        showRainforestCover,
        showReefCover,
        showTaigaCover,
        showArctic,
        showDesert,
        showRainforest,
        showReef,
        showTaiga
    }
}