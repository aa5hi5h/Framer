"use client"
import { Eye, Image } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { useEffect, useState } from "react"

const ItemsCaraousel = () => {



    return (
        <div className="relative hover:cursor-pointer overflow-hidden h-[50vh] min-w-[37vh]">
        <div className="rounded-lg ">
        <div className="flex flex-col h-[50vh] shadow-sm w-[37vh]   ">
            <div className="h-[40vh] w-full flex border-slate-300 border-2 bg-slate-200 opacity-40 rounded-t-lg justify-center items-center"><Image size={36}/></div>
            <div className="flex flex-col p-3 border-2 border-slate-200 rounded-b-lg">
            <h2 className="  text-xl font-semibold tracking-tight">name</h2>
            <h3 className="  text-sm font-medium ">price</h3>
            <div className="flex justify-between w-full gap-2 items-center mt-4">
                <Button variant={"outline"} className="w-full bg-slate-200 hover:bg-slate-300 transition-all" >Add to cart</Button>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ItemsCaraousel