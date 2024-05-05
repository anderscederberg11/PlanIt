import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import BarGraphTwo from "@/components/ExplorePageInfoComponents/Graph/BarGraphTwo"

export default function arcticInfo(){
    return(
        <>
            <BarGraphTwo/>
            <ExplorePageInfo sectionTitle="TAIGA"
                pp1="The taiga is home to diverse species, including moose, wolves, and bears." 
                pp2="Industrial activities like logging and mining pose threats to taiga habitats and biodiversity." 
                pp3="Siberian tigers are critically endangered due to habitat loss and poaching." 
                pp4="Taiga forests play a vital role in carbon sequestration, helping mitigate climate change."/>
        </>
    )
}