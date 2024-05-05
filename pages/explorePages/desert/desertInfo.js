import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import BarGraphThree from "@/components/ExplorePageInfoComponents/Graph/BarGraphThree"

export default function rainforestInfo(){
    return(
        <>
            <BarGraphThree/>
            <ExplorePageInfo sectionTitle="DESERT"
                pp1="Deserts harbor surprising diversity, including reptiles like ants and lizards." 
                pp2="Desertification, driven by factors like overgrazing and climate change, threatens desert ecosystems." 
                pp3="The desert tortoise faces threats from habitat loss and urbanization." 
                pp4="Desert ecosystems are resilient and adapted to extreme conditions like high temperatures and scarce water."/>
        </>
    )
}