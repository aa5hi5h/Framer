"use client"
import { PencilRuler, Plus } from "lucide-react"
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { TooltipContent } from "@radix-ui/react-tooltip"
import { useState } from "react"

interface SidePannelMenuProp{
  selectedIcon: string | null;
  handleEdit: (iconName: string) => void
  handleCreate: (iconName: string) => void
}

const SidePannelMenu = ({handleEdit,handleCreate,selectedIcon}:SidePannelMenuProp) => {


    return (
      <div className="flex gap-x-4">
        <PencilRuler onClick={() => handleEdit('edit')} className={`h-10 w-10 p-2 cursor-pointer rounded-md border-[1px] ${selectedIcon === "edit" ? 'border-zinc-950': 'border-slate-300'} `} />
        <Plus onClick={() => handleCreate("add")} className={`h-10 w-10 p-2 cursor-pointer rounded-md border-[1px] ${selectedIcon === 'add' ? "border-slate-950": 'border-slate-300' } `} />
      </div>
    )
}

export default SidePannelMenu