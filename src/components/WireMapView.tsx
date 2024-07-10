import { useAiResponse } from "@/app/Context/AiResponseContext"
import GeneratedComponents from "./GeneratedComponent"


const WireMapView = () => {

    const {aiResponse} = useAiResponse()
    return (
        <div className=" w-full">
            <GeneratedComponents aiResponse={aiResponse} />
        </div>
    )
}


export default WireMapView