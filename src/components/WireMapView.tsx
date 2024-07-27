"use client"
import { useAiResponse } from "@/app/Context/AiResponseContext"
import GeneratedComponents from "./GeneratedComponent"
import { usePageSelection } from "@/app/Context/ActivePageContext"
import { useComponentPageConfig } from "@/app/Context/ComponentPageContext"

interface WireMapViewProp{
    viewMode: string 
}

interface Component {
    name: string;
}

interface PageConfig {
    name: string;
    components: Component[] | string[];
}

const WireMapView = ({viewMode}:WireMapViewProp) => {

    const {aiResponse} = useAiResponse()
    const { currentPage } = usePageSelection();
    const { ComponentpageConfig } = useComponentPageConfig();


    const currentPageConfig = ComponentpageConfig.find((page: PageConfig) => page.name === currentPage) || { components: [] };

    return (
        <div className= {`w-full`}>
             {aiResponse && <GeneratedComponents 
             aiResponse={aiResponse} 
             currentPage={currentPage} 
             viewMode={viewMode}
             componentPageConfig={currentPageConfig.components} />}
        </div>
    )
}


export default WireMapView