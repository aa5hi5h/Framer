import { Plus } from "lucide-react"
import SidePannelMenu from "./SidePannetMenu"
import SidePannelCard from "./SidePannelCard"
import { useState } from "react"


const SidePannel = () => {

    const[selectedIcon,setSelectedIcon] = useState<string | null>(null)

    const handleCreate = (iconName: string) => {
        setSelectedIcon(prevIcon => prevIcon === iconName ? null : iconName)
    }

    const handleEdit = (iconName: string) => {
        setSelectedIcon(prevIcon => prevIcon === iconName ? null : iconName)
    }

    return (
        <div className="flex flex-col w-full space-y-4 ml-auto ">
            <div className="ml-auto">
           <SidePannelMenu  selectedIcon={selectedIcon} handleCreate={handleCreate} handleEdit={handleEdit} />
           </div>
           {selectedIcon !== null && (
           <div className="w-full p-2 h-[70vh] overflow-y-scroll bg-white rounded-lg border-[2px] border-slate-300">
            <SidePannelCard />
           </div>
            )}
        </div>
    )
}

export default SidePannel