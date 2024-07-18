import { BarChart4, Cctv, Clapperboard, GlobeLock, MonitorSmartphone, Piano } from "lucide-react"
import LmsProductCard from "./LmsProductCard"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

interface LmsMainCardProp{
    viewMode: string
}

const LmsMainCard = ({viewMode}:LmsMainCardProp) => {

    const itemsList = [
        {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1},
    ]

if(viewMode === "monitor"){
    return (
        <div className="flex flex-col space-y-4 mt-[-0.9rem]">
            <div className=" gap-x-4 flex p-4">
                <span className="flex gap-x-1 text-sm font-medium items-center px-2  rounded-full hover:bg-slate-100 transition-all border-[1px] border-slate-600 max-w-max">
                    <BarChart4 size={18} />
                    Accounting
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center px-1  rounded-full hover:bg-slate-100 transition-all border-[1px] border-slate-600 max-w-max">
                    <MonitorSmartphone size={18} />
                    Computers
               </span>
                <span className="flex gap-x-1 text-sm font-medium items-center px-4  rounded-full border-[1px] hover:bg-slate-100 transition-all border-slate-600 max-w-max">
                    <GlobeLock size={18} />
                    Web
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center px-2  rounded-full hover:bg-slate-100 transition-all border-[1px] border-slate-600 max-w-max">
                    <Clapperboard size={18} />
                    Filming
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center px-2  rounded-full border-[1px] hover:bg-slate-100 transition-all border-slate-600 max-w-max">
                    <Piano size={18} />
                    Music
                </span>
                <span className="flex gap-x-1 text-sm items-center font-medium px-2 py-2 rounded-full border-[1px] hover:bg-slate-100 transition-all border-slate-600 max-w-max">
                    <Cctv size={18} />
                     Security
                </span>
            </div>
            <div className="grid grid-cols-3 pl-4  space-x-4">
                {
                    itemsList.map((item,index) => (
                        <LmsProductCard />
                    ))
                }
            </div>
        </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="flex flex-col space-y-6 mt-[-0.9rem]">
            <div className=" gap-x-4 hidden">
                <span className="flex gap-x-1 text-sm font-medium items-center px-2 rounded-full hover:bg-slate-100 transition-all border-[1px] border-slate-600 max-w-max">
                    <BarChart4 size={18} />
                    Accounting
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center p-2 rounded-full hover:bg-slate-100 transition-all border-[1px] border-slate-600 max-w-max">
                    <MonitorSmartphone size={20} />
                    Computer Science
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center p-2 rounded-full border-[1px] hover:bg-slate-100 transition-all border-slate-600 max-w-max">
                    <GlobeLock size={20} />
                    Accounting
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center p-2 rounded-full hover:bg-slate-100 transition-all border-[1px] border-slate-600 max-w-max">
                    <Clapperboard size={20} />
                    Filming
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center p-2 rounded-full border-[1px] hover:bg-slate-100 transition-all border-slate-600 max-w-max">
                    <Piano size={20} />
                    Music
                </span>
                <span className="flex gap-x-1 text-sm items-center font-medium p-2 rounded-full border-[1px] hover:bg-slate-100 transition-all border-slate-600 max-w-max">
                    <Cctv size={20} />
                    Network and Security
                </span>
            </div>
            <div className="grid grid-cols-2 space-x-4">
                {
                    itemsList.map((item,index) => (
                        <LmsProductCard />
                    ))
                }
            </div>
        </div>
    )
}

}
export default LmsMainCard