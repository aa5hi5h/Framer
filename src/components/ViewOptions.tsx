"use client"
import { Fullscreen, Maximize, Monitor, Smartphone, Tablet } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { useState } from "react"

interface ViewOptionsProp{
    onViewChange: (view:string) => void
}

const ViewOptions = ({onViewChange}:ViewOptionsProp) => {
    const [selectedView,setSelectedView] = useState<string | null>(null)

    const handleClick = (view:string) => {
        setSelectedView(view)
        onViewChange(view)
    }
    return (
        <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                <Monitor onClick={() => handleClick("monitor")} className={`w-6 h-6 p-1 ${selectedView === "monitor" ? "bg-slate-100" : "hover:bg-slate-100"} rounded-md`} />
                </TooltipTrigger>
                <TooltipContent>Dekstop</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                <Smartphone onClick={() => handleClick("mobile")} className={`w-6 h-6 p-1 ${selectedView === "mobile" ? "bg-slate-100" :"hover:bg-slate-100"} rounded-md`} />
                </TooltipTrigger>
                <TooltipContent>Mobile</TooltipContent>
                </Tooltip>
             
                </TooltipProvider>
    )
}

export default ViewOptions