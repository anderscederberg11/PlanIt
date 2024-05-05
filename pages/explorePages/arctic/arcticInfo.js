import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import DoubleLineGraph from "@/components/ExplorePageInfoComponents/Graph/DoubleLineGraph"

export default function arcticInfo(){
    return(
        <>
            <DoubleLineGraph/>
            <ExplorePageInfo sectionTitle="ARCTIC"
                pp1="The Arctic hosts diverse wildlife, including polar bears, Arctic foxes, and snowy owls." 
                pp2="Melting ice due to climate change threatens Arctic habitats and accelerates sea-level rise globally." 
                pp3="Polar bears are at risk due to habitat loss from melting sea ice and pollution." 
                pp4="Arctic ecosystems are crucial for regulating global climate patterns and storing carbon in permafrost."/>
        </>
    )
}