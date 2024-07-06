"use client"
import { Eye, Image } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import { useEffect, useState } from "react"


const LmsProductCard = () => {

    return (
        <div>
        <div className="rounded-lg mt-4">
        <div className="flex flex-col h-[50vh] shadow-sm w-full  ">
            <div className="h-[40vh] w-full flex border-zinc-300 border-2 bg-slate-200 opacity-40 rounded-t-lg justify-center items-center"><Image size={36}/></div>
            <div className="flex flex-col p-3 border-2 border-slate-200 rounded-b-lg">
            <h2 className="  text-xl font-semibold tracking-tight">Course name</h2>
            <h3 className="  text-sm font-medium ">$$$</h3>
            <h3 className="  text-sm font-medium ">8 chapters</h3>
            <div className="flex justify-between w-full gap-2 items-center mt-4">
                <Button variant={"outline"} className="w-full bg-slate-200 hover:bg-slate-300 transition-all" >View course</Button>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default LmsProductCard

