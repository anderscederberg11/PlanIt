import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import LineGraph from "@/components/ExplorePageInfoComponents/Graph/LineGraph"

export default function reefInfo(){
    return(
        <>
            <LineGraph/>
            <ExplorePageInfo sectionTitle="REEF"
                pp1="Coral reefs are  the most species diverse ecosystems on Earth" 
                pp2="Coral bleaching threatens reefs worldwide, driven by factors like rising sea temperatures." 
                pp3="Hawksbill sea turtles face extinction due to  illegal trade in their shells." 
                pp4="Coral reefs provide food and shelter for countless marine species, supporting complex food webs."/>
        </>
    )
}