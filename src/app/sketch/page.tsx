"use client"
import { useState } from "react"
import ViewOptions from "@/components/ViewOptions"
import WireMapView from "@/components/WireMapView"

const page = () => {

    const [viewMode ,setViewMode] = useState<string>("monitor")

    const handleViewChange = (view:string) => {
        setViewMode(view)
    }

    const viewScreen = () => {
        switch(viewMode){
            case "mobile": return "max-w-sm mx-auto"
            case "tablet": return "max-w-xl  mx-auto"
            case "monitor": return "max-w-full "
            default:{
                return ""
            }
        }
    }

    return (
        <div className="grid  grid-cols-3 lg:grid-cols-10">
            <div className="hidden lg:flex lg:col-span-1 h-[90vh] bg-emerald-100">
                side dashborard
            </div>
            <div className="col-span-3 lg:col-span-7 bg-slate-100 p-2 rounded-md flex flex-col space-y-4">
               <div className="bg-white flex gap-2 items-center max-w-max p-2 rounded-md ml-auto mr-[2rem] mt-[1rem]">
                <ViewOptions onViewChange={handleViewChange} />
               </div>
               <div className={`${viewScreen()} rounded-md p-3 w-full border-2 bg-white border-gray-300`}>
                <WireMapView />
               </div>
            </div>
            <div className="hidden lg:flex lg:col-span-2 h-full ">
                side options
            </div>
        </div>
    )
}


export default page