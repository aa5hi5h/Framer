"use client"
import { useAiResponse } from "@/app/Context/AiResponseContext"
import GeneratedComponents from "./GeneratedComponent"
import { usePageSelection } from "@/app/Context/ActivePageContext"
import { useComponentPageConfig } from "@/app/Context/ComponentPageContext"

interface WireMapViewProp{
    viewMode: string 
}

const WireMapView = ({viewMode}:WireMapViewProp) => {

    const {aiResponse} = useAiResponse()
    const { currentPage } = usePageSelection();
    const { ComponentpageConfig } = useComponentPageConfig();

    console.log(aiResponse)
    console.log(`Current view mode: ${viewMode}`);

    return (
        <div className= {`w-full`}>
             {aiResponse && <GeneratedComponents 
             aiResponse={aiResponse} 
             currentPage={currentPage} 
             viewMode={viewMode}
             componentPageConfig={ComponentpageConfig} />}
        </div>
    )
}


export default WireMapView